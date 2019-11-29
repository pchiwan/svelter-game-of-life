<script>
import Label from './components/Label.svelte';
import Spacer from './components/Spacer.svelte';
export let generations = 0;
export let liveCells = 0;
export let gameOver
</script>

<style>
  span {
    font-weight: 400;
  }
</style>

 <div>
  <Label>Generations: <span>{generations}</span></Label>
  <Spacer bottom={2}>    
    <Label>Live cells: <span>{liveCells}</span></Label>
    {#if gameOver}    
      <Label color='#ff3e00' fontWeight={300}>
        The population has {liveCells ? 'stagnated' : 'died'}!
      </Label>
    {/if}
  </Spacer>      
</div>