<template>
  <div :class="{ button: true, checked: value }" @click="toggle">
    <span class="dot"></span>
  </div>
</template>
<script>
export default {
  name: "Switch",
  props: {
    value: Boolean,
  },
  setup(props, context) {
    const toggle = () => {
      context.emit("update:value", !props.value);
    };
    return { toggle };
  },
};
</script>
<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;
.button {
  position: relative;
  height: $h;
  width: $h * 2;
  border-radius: $h / 2;
  background-color: grey;

  > .dot {
    position: absolute;
    top: 2px;
    left: 2px;
    width: $h2;
    height: $h2;
    border-radius: $h2 / 2;
    background: white;
    transition: left 0.2s;
  }
  &.checked {
    background-color: blue;
    > .dot {
      left: calc(100% - #{$h2} - 2px);
    }
  }
}
</style>