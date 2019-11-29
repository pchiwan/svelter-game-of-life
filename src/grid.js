import Cell from './cell.js';

const newGeneration = grid => {
  let newGrid = cloneGrid();

  grid.forEach((row, x) => {
    row.forEach((cell, y) => {
      let liveNeighbours = checkNeighbours(x, y);
      newGrid[x][y] = getNewCell(cell, liveNeighbours);
    });
  });

  return newGrid;
};

const findLiveCells = grid => {
  return grid.reduce((liveCellsInRow, row) => {
    return (
      liveCellsInRow +
      row.reduce((liveCells, cell) => {
        return liveCells + (cell.live ? 1 : 0);
      }, 0)
    );
  }, 0);
};

const checkNeighbours = (grid, x, y) => {
  const gridSize = grid.length;
  let liveNeighbours = 0;
  // check 8 neighbours clockwise
  liveNeighbours += checkNeighbour(
    grid,
    getPrevIndex(x, gridSize),
    getPrevIndex(y, gridSize)
  ); // top left cell
  liveNeighbours += checkNeighbour(grid, x, getPrevIndex(y, gridSize)); // top cell
  liveNeighbours += checkNeighbour(
    grid,
    getNextIndex(x, gridSize),
    getPrevIndex(y, gridSize)
  ); // top right cell
  liveNeighbours += checkNeighbour(grid, getNextIndex(x, gridSize), y); // right cell
  liveNeighbours += checkNeighbour(
    grid,
    getNextIndex(x, gridSize),
    getNextIndex(y, gridSize)
  ); // bottom right cell
  liveNeighbours += checkNeighbour(grid, x, getNextIndex(y, gridSize)); // bottom cell
  liveNeighbours += checkNeighbour(
    grid,
    getPrevIndex(x, gridSize),
    getNextIndex(y, gridSize)
  ); // bottom left cell
  liveNeighbours += checkNeighbour(grid, getPrevIndex(x, gridSize), y); // left cell
  return liveNeighbours;
};

const checkNeighbour = (grid, x, y) => {
  return grid[x][y].live ? 1 : 0;
};

const getPrevIndex = (x, gridSize) => {
  return x - 1 < 0 ? gridSize - 1 : x - 1;
};

const getNextIndex = (x, gridSize) => {
  return x + 1 === gridSize ? 0 : x + 1;
};

const getNewCell = (cell, liveNeighbours) => {
  if (liveNeighbours < 2 && cell.live) {
    // cell dies, as if caused by under-population
    return cell.die();
  } else if (liveNeighbours > 3 && cell.live) {
    // cell dies, as if caused by overcrowding
    return cell.die();
  } else if (liveNeighbours === 3 && cell.dead) {
    // cell becomes live, as if by reproduction
    return cell.rise();
  }
  return cell; // cell lives on to the next generation
};

const encode = grid => {
  return grid
    .map(row => {
      return row
        .map(cell => {
          return cell.live ? 1 : 0;
        })
        .join('');
    })
    .join('');
};

export const createGrid = gridSize => {
  const grid = [];

  for (let i = 0, l1 = gridSize; i < l1; i++) {
    let row = [];
    for (let j = 0, l2 = gridSize; j < l2; j++) {
      row.push(new Cell());
    }
    grid.push(row);
  }

  return grid;
};

export const cloneGrid = grid => {
  let newGrid = [];

  grid.forEach(row => {
    let newRow = [];
    row.forEach(cell => {
      newRow.push(new Cell(cell.live));
    });
    newGrid.push(newRow);
  });

  return newGrid;
};

export const toggleCell = (grid, x, y) => {
  grid[x][y].toggle();
  return cloneGrid(grid);
};

export const tick = grid => {
  const newGrid = newGeneration(grid);

  return {
    currentGrid: encode(newGrid),
    liveCells: findLiveCells(newGrid)
  };
};
