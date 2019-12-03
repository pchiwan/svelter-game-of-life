import Cell from './cell.js';

const checkNeighbours = (grid, x, y) => {
  const size = grid.length;
  let liveNeighbours = 0;

  // check 8 neighbours clockwise
  liveNeighbours += checkNeighbourXY(
    grid,
    getPrevIndex(x, size),
    getPrevIndex(y, size)
  ); // top left cell
  liveNeighbours += checkNeighbourXY(grid, x, getPrevIndex(y, size)); // top cell
  liveNeighbours += checkNeighbourXY(
    grid,
    getNextIndex(x, size),
    getPrevIndex(y, size)
  ); // top right cell
  liveNeighbours += checkNeighbourXY(grid, getNextIndex(x, size), y); // right cell
  liveNeighbours += checkNeighbourXY(
    grid,
    getNextIndex(x, size),
    getNextIndex(y, size)
  ); // bottom right cell
  liveNeighbours += checkNeighbourXY(grid, x, getNextIndex(y, size)); // bottom cell
  liveNeighbours += checkNeighbourXY(
    grid,
    getPrevIndex(x, size),
    getNextIndex(y, size)
  ); // bottom left cell
  liveNeighbours += checkNeighbourXY(grid, getPrevIndex(x, size), y); // left cell

  return liveNeighbours;
};

const checkNeighbourXY = (grid, x, y) => (grid[x][y].live ? 1 : 0);

const getPrevIndex = (x, size) => (x - 1 < 0 ? size - 1 : x - 1);

const getNextIndex = (x, size) => (x + 1 === size ? 0 : x + 1);

const createArray = (size, callbackFn = () => {}) => {
  return size ? [...Array(size).fill()].map(callbackFn) : [];
};

export const getNewCell = (cell, liveNeighbours) => {
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

export const createGrid = size => {
  return size
    ? createArray(size, () => createArray(size, () => new Cell()))
    : [];
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
  const newGrid = cloneGrid(grid);
  newGrid[x][y].toggle();
  return newGrid;
};

export const encodeGrid = grid => {
  if (!grid || !grid.length) {
    return '';
  }
  return grid
    .map(row => row.map(cell => (cell.live ? 1 : 0)).join(''))
    .join('');
};

export const findLiveCells = grid =>
  grid.reduce(
    (liveCellsInRow, row) =>
      liveCellsInRow +
      row.reduce((liveCells, cell) => liveCells + (cell.live ? 1 : 0), 0),
    0
  );

export const newGeneration = grid => {
  let newGrid = cloneGrid(grid);

  grid.forEach((row, x) => {
    row.forEach((cell, y) => {
      let liveNeighbours = checkNeighbours(newGrid, x, y);
      newGrid[x][y] = getNewCell(cell, liveNeighbours);
    });
  });

  return newGrid;
};
