<script>
  import Label from "./components/Label.svelte";
  import Spacer from "./components/Spacer.svelte";
</script>

<style>
  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    text-transform: uppercase;
  }

  div img {
    width: 80px;
  }
</style>

<div>
  <Spacer top={5} bottom={2}>
    <Label fontSize="12px">Powered by</Label>
    <img src="/svelte-logo.png" alt="Svelte Logo" />
  </Spacer>
</div>
