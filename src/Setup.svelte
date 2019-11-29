<script>
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

  button {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 12px 0px;
    transition: background-color 0.2s ease 0s, color 0.2s ease 0s,
      border-color 0.2s ease 0s, opacity 0.2s ease 0s;
    border-width: 1px;
    border-color: transparent;
    border-radius: 4px;
    border-style: solid;
    outline: none;
    margin: 0;
    font-size: 20px;
    font-weight: bold;
    padding: 10px 15px;
    background-color: #ff3e00;
    cursor: pointer;
  }

  button:hover {
    background-color: lightcoral;
  }

  input {
    font-size: 20px;
    padding: 5px 10px;
    text-align: center;
    width: 80px;
  }
</style>

<div>
  <h2>Choose grid size</h2>
  <input type="text" bind:value on:change={handleChange} />
  <br />
  <button type="button" on:click={handleClick}>Create grid</button>
</div>
