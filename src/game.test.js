import {
  createGrid,
  encodeGrid,
  findLiveCells,
  getNewCell,
  toggleCell
} from './game';
import Cell from './cell';

describe('game of life rules', () => {
  test('any live cell with fewer than two live neighbours dies, as if caused by under-population', () => {
    const cell = new Cell(true);
    expect(getNewCell(cell, 1).dead).toBeTruthy();
  });

  test.each`
    cell              | liveNeighbours | expectedResult
    ${new Cell(true)} | ${1}           | ${false}
    ${new Cell(true)} | ${2}           | ${true}
    ${new Cell(true)} | ${3}           | ${true}
  `(
    'any live cell with two or three live neighbours lives on to the next generation',
    ({ cell, liveNeighbours, expectedResult }) => {
      expect(getNewCell(cell, liveNeighbours).live).toBe(expectedResult);
    }
  );

  test('any live cell with more than three live neighbours dies, as if by overcrowding', () => {
    const cell = new Cell(true);
    expect(getNewCell(cell, 4).dead).toBeTruthy();
  });

  test.each`
    cell          | liveNeighbours | expectedResult
    ${new Cell()} | ${1}           | ${false}
    ${new Cell()} | ${3}           | ${true}
    ${new Cell()} | ${4}           | ${false}
  `(
    'any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction',
    ({ cell, liveNeighbours, expectedResult }) => {
      expect(getNewCell(cell, liveNeighbours).live).toBe(expectedResult);
    }
  );
});

describe('utility methods', () => {
  describe('createGrid', () => {
    test('returns an empty array if no size is specified', () => {
      expect(createGrid()).toEqual([]);
    });

    test('returns a grid of specified size', () => {
      const size = 2;
      const grid = createGrid(2);
      expect(grid.length).toBe(2);
      grid.forEach(row => {
        expect(row.length).toBe(2);
      });
    });
  });

  describe('toggleCell', () => {
    test('toggles the status of the specified cell, and returns the changed grid', () => {
      const grid = createGrid(2);
      const newGrid = toggleCell(grid, 1, 1);
      expect(grid[1][1].status).toBeFalsy();
      expect(newGrid[1][1].status).toBeTruthy();
    });
  });

  describe('encodeGrid', () => {
    const grid1 = createGrid(2);
    const grid2 = toggleCell(toggleCell(createGrid(2), 0, 0), 1, 1);

    test.each`
      grid     | expectedResult
      ${[]}    | ${''}
      ${grid1} | ${'0000'}
      ${grid2} | ${'1001'}
    `('returns a grid as a flattened string', ({ grid, expectedResult }) => {
      expect(encodeGrid(grid)).toBe(expectedResult);
    });
  });

  describe('findLiveCells', () => {
    const grid1 = createGrid(2);
    const grid2 = toggleCell(toggleCell(createGrid(2), 0, 0), 1, 1);

    test.each`
      grid     | expectedResult
      ${[]}    | ${0}
      ${grid1} | ${0}
      ${grid2} | ${2}
    `(
      'returns the number of live cells in a grid',
      ({ grid, expectedResult }) => {
        expect(findLiveCells(grid)).toBe(expectedResult);
      }
    );
  });
});
