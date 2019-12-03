<script>
  import Game from "./Game.svelte";
  import Footer from "./Footer.svelte";
</script>

<style>
  main {
    display: flex;
    flex-direction: column;
    text-align: center;
    max-width: none;
    height: 100%;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 64px;
    font-weight: 100;
    box-shadow: 0 1px #ff3e00;
  }

  @media (max-width: 480px) {
    main {
      max-width: 280px;
    }

    h1 {
      font-size: 42px;
      margin: 20px 0;
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
