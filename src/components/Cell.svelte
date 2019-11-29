<script>
  export let row;
  export let cell;
  export let live;
  export let onClick;
</script>

<style>
  td {
    padding: 10px;
    border: 1px solid #888;
  }

  td.live {
    background-color: cornflowerblue;
  }
</style>

<td on:click={() => onClick(row, cell)} class={live ? 'live' : ''} />
