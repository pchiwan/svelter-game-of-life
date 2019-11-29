<script>
  import Row from "./components/Row.svelte";
  import Cell from "./components/Cell.svelte";

  export let grid
  export let onCellClick
</script>

<style>
  div {
    display: flex;
    justify-content: center;
  }
  table {
    border: 8px solid #888;
  }
</style>

<div>
  <table cellpadding="0" cellspacing="0">
    {#each grid as row, i}
      <Row>
        {#each row as cell, j}
          <Cell live={cell.live} onClick={onCellClick} row={i} cell={j} />
        {/each}
      </Row>
    {/each}
  </table>
</div>
