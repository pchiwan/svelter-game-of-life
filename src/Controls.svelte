<script>
  import Button from './components/Button.svelte';
  export let onStartClick;
  export let onStopClick;
</script>

<div>
  <Button onClick={onStartClick}>Start</Button>
  <Button onClick={onStopClick}>Stop</Button>
</div>
