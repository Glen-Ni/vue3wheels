<template>
  <router-view />
</template>

<script>
import { provide, ref } from "vue";
export default {
  name: "App",
  components: {},
  setup() {
    const width = document.documentElement.clientWidth;
    const asideVisible = ref(width > 500 ? true : false);
    provide("asideVisible", asideVisible);
  },
};
</script>
<style lang="scss" scoped>
</style>
