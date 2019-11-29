<script>
  import Grid from "./Grid.svelte";
  import Setup from "./Setup.svelte";
  import Spacer from "./Spacer.svelte";
  import Controls from "./Controls.svelte";

  let gridSize = 0;

  function handleCreateGrid(newGridSize) {
    gridSize = newGridSize;
  }

  function handleStartGame() {
    console.log("start game");
  }

  function handleStopGame() {
    console.log("stop game");
  }
</script>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
    box-shadow: 0 1px #ff3e00;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>

<main>
  <h1>Game Of Life</h1>

  <Setup onClick={handleCreateGrid} />
  <Spacer bottom={4} />
  <Grid size={gridSize} />
  <Spacer bottom={4} />
  {#if gridSize > 0}
    <Controls onStartClick={handleStartGame} onStopClick={handleStopGame} />
  {/if}
</main>
