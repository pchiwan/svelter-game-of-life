<script>
  export let bottom;
  export let top;
  let unit = 8;

  $: marginTop = (top || 0) * unit;
  $: marginBottom = (bottom || 0) * unit;
</script>

<div style="margin-top: {marginTop}px; margin-bottom: {marginBottom}px" />
