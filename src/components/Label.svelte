<script>
  export let fontWeight = 200;
  export let fontSize = 20;
  export let color = 'black';

  $: style = [
    `color: ${color}`,
    `font-size: ${fontSize}px`,
    `font-weight: ${fontWeight}`
  ]
</script>

<style>
  label {
    margin: 5px;
  }
</style>

<label style={style.join(';')}>
  <slot />
</label>
