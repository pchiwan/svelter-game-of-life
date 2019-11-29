<script>
  import Button from './components/Button.svelte'
  export let onClick;
  let value = 10;

  function handleClick() {
    onClick(value);
  }

  function handleChange(event) {
    value = event.target.value;
  }
</script>

<style>
  h2 {
    font-weight: 200;
  }

  input {
    font-size: 36px;
    border: none;
    border-bottom: 1px solid #ccc;
    outline: none;
    padding: 5px 10px;
    text-align: center;
    width: 80px;
  }
</style>

<div>
  <h2>Choose grid size</h2>
  <input type="text" bind:value on:change={handleChange} />
  <br />
  <Button onClick={handleClick}>Create grid</Button>
</div>
