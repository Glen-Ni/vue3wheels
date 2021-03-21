<template>
  <button
    class="hao-button"
    :class="`hao-button-${type}`"
  >
    <slot />
  </button>
</template>
<script lang="ts">
export default {
  name: "Button",
  props: {
    type: {
      type: String,
      default: 'button'
    },
  }
};
</script>
<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #333;
$blue: #40a9ff;
$radius: 4px;
.hao-button {
  height: $h;
  padding: 0 12px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out($color: black, $amount: 0.95);
  transition: all 0.4s;
  &:hover, &:focus {
    color: $blue;
    border-color: $blue;
  }
  &:focus {
    outline: none;
  }
  & + & {
    margin-left: 8px;
  }
}
  
</style>