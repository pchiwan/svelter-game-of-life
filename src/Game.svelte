<script>
  import {
    createGrid,
    encodeGrid,
    findLiveCells,
    newGeneration,
    toggleCell
  } from "./game";
  import Spacer from "./components/Spacer.svelte";
  import Grid from "./Grid.svelte";
  import Setup from "./Setup.svelte";
  import Legend from "./Legend.svelte";
  import Controls from "./Controls.svelte";

  const CYCLE_TIME = 600;

  let grid = [];
  let size = 0;
  let gameOver = false;
  let generations = 0;
  let interval = null;
  let prevGrid = "";
  $: liveCells = findLiveCells(grid);

  function handleCreateGrid(newSize) {
    size = parseInt(newSize, 10);
    grid = createGrid(size);
    reset();
  }

  function handleCellClick(row, cell) {
    grid = toggleCell(grid, row, cell);
  }

  function reset() {
    gameOver = false;
    generations = 0;
    interval = null;
    prevGrid = "";
  }

  function startGame() {
    reset();

    interval = setInterval(() => {
      grid = newGeneration(grid);
      generations++;

      const currentGrid = encodeGrid(grid);

      if (!liveCells) {
        // our population has died, the game of life is over
        gameOver = true;
        stopGame();
        return;
      }

      if (currentGrid === prevGrid) {
        // our population has stagnated, the game of life is over
        gameOver = true;
        stopGame();
        return;
      }
      prevGrid = currentGrid;
    }, CYCLE_TIME);
  }

  function stopGame() {
    if (interval) {
      clearInterval(interval);
    }
  }
</script>

<Spacer bottom={4}>
  <Setup onClick={handleCreateGrid} />
</Spacer>
{#if size > 0}
  <Spacer bottom={2}>
    <Legend {gameOver} {generations} {liveCells} />
  </Spacer>
  <Spacer bottom={4}>
    <Grid {grid} onCellClick={handleCellClick} />
  </Spacer>
  <Controls onStartClick={startGame} onStopClick={stopGame} />
{/if}
