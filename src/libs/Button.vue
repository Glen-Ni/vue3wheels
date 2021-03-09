<template>
  <div>
    <button v-bind="$attrs">
      <slot />
    </button>
  </div>
</template>
<script lang="ts">
export default {
  name: "Button",
  inheritAttrs: false,
};
</script>