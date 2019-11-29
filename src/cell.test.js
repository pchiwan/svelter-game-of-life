import Cell from './cell';

describe('Cell', () => {
  test('a cell is created dead by default', () => {
    const c = new Cell();
    expect(c.dead).toBeTruthy();
    expect(c.status).toBeFalsy();
  });

  test('a cell can be created live', () => {
    const c = new Cell(true);
    expect(c.live).toBeTruthy();
    expect(c.status).toBeTruthy();
  });

  test(`a cell's status can be toggled`, () => {
    const c = new Cell();
    expect(c.live).toBeFalsy();
    c.toggle();
    expect(c.live).toBeTruthy();
  });

  test('a dead cell can be brought back to life', () => {
    const c = new Cell();
    c.rise();
    expect(c.live).toBeTruthy();
  });

  test('a live cell can be killed', () => {
    const c = new Cell(true);
    c.die();
    expect(c.dead).toBeTruthy();
  });
});
