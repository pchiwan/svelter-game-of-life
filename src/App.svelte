<script>
  import Game from './Game.svelte';
  import Footer from './Footer.svelte';
</script>

<style>
  main {
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 1em;
    max-width: 240px;
    height: 100%;
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
  <div style="flex: 1">
    <Game />
  </div>
  <Footer />
</main>
