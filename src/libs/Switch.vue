<template>
  <div :class="{ button: true, checked }" @click="toggle">
    <span class="dot"></span>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  name: "Switch",
  setup() {
    const checked = ref(false);
    const toggle = () => {
      checked.value = !checked.value;
    };
    return { checked, toggle };
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
  }
  &.checked {
    background-color: blue;
    > .dot {
      left: calc(100% - #{$h2} - 2px);
    }
  }
}
</style>