<script>
  import { createGrid, toggleCell } from "./grid";
  import Row from "./Row.svelte";
  import Cell from "./Cell.svelte";

  export let size;

  const intervalTime = 1000;

  $: grid = createGrid(size);

  // let interval = null;
  // let generations = 0;
  // let prevGrid = '';

  function handleCellClick(row, cell) {
    grid = toggleCell(grid, row, cell);
  }
</script>

<style>
  div {
    display: flex;
    justify-content: center;
  }
  table {
    border: 8px double #888;
  }
</style>

<div>
  {#if size > 0}
    <table cellpadding="0" cellspacing="0">
      {#each grid as row, i}
        <Row>
          {#each row as cell, j}
            <Cell live={cell.live} onClick={handleCellClick} row={i} cell={j} />
          {/each}
        </Row>
      {/each}
    </table>
  {/if}
</div>
