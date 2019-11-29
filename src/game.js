import Grid from './grid.js';

function GameOfLife (gridSize, $grid, $score, $message) {
  const intervalTime = 1000;
  let g = new Grid(gridSize);
  let interval = null;
  let generations = 0;
  let prevGrid = '';

  this.start = () => {
    init();
    interval = setInterval(() => {
      let result = g.tick();
      generations++;
      this.drawGrid();
      if (!result.liveCells) {
        // our population has died, the game of life is over
        $message.text('The population has died');
        this.stop();
        return;
      }
      if (result.currentGrid === prevGrid) {
        // our population has stagnated, the game of life is over
        $message.text('The population has stagnated');
        this.stop();
        return;
      }
      $message.text('Live cells: ' + result.liveCells);
      prevGrid = result.currentGrid;
    }, intervalTime);
  };

  this.stop = () => {
    if (interval) {
      clearInterval(interval);
    }
  };

  //------------------------------- PRIVATE METHODS

  const init = () => {
    generations = 0;
    $score.text('0');
    $message.text('');
    this.stop();
    this.drawGrid();
  };

  init();
}

export default GameOfLife;
