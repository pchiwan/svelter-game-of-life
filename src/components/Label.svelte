<script>
  import { reduceProps } from "../utils";

  $: style = reduceProps($$props);
</script>

<style>
  label {
    font-weight: 200;
    font-size: 20px;
    text-align: center;
    color: black;
    margin: 5px;
  }
</style>

<label style={style.join(';')}>
  <slot />
</label>
