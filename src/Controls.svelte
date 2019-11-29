<script>
  export let onStartClick;
  export let onStopClick;
</script>

<style>
  button {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 3px 12px 0px;
    transition: background-color 0.2s ease 0s, color 0.2s ease 0s,
      border-color 0.2s ease 0s, opacity 0.2s ease 0s;
    border-width: 1px;
    border-color: transparent;
    border-radius: 4px;
    border-style: solid;
    font-size: 20px;
    font-weight: bold;
    padding: 5px 10px;
    cursor: pointer;
    background-color: #aaa;
  }

  button:hover {
    background-color: lightgrey;
  }
</style>

<div>
  <button type="button" on:click={onStartClick}>Start</button>
  <button type="button" on:click={onStopClick}>Stop</button>
</div>
