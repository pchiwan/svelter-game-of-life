<script>
  export let onClick
</script>

<style>
  button {
    box-shadow: rgba(0, 0, 0, 0.1) 0 3px 8px 0;
    transition:
      background-color 0.1s ease 0s,
      color 0.1s ease 0s,
      border-color 0.1s ease 0s,
      opacity 0.1s ease 0s;
    border-width: 1px;
    border-color: transparent;
    border-radius: 4px;
    border-style: solid;
    outline: none;
    margin: 0;
    font-size: 20px;
    font-weight: 400;
    padding: 10px 15px;
    background-color: #ccc;
    cursor: pointer;
  }

  button:hover {
    background-color: lightcoral;
  }
</style>

<button type="button" on:click={onClick}>
  <slot />
</button>