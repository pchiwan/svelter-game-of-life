<script>
  export let bottom = 0;
  export let top = 0;
  
  const UNIT = 8;

  $: style = [
    `margin-top: ${top * UNIT}px`,
    `margin-bottom: ${bottom * UNIT}px`
  ]
</script>

<div style={style.join(';')}>
  <slot />
</div>
