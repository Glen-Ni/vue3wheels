<template>
  <router-view />
</template>

<script>
import { provide, ref } from 'vue'
export default {
  name: 'App',
  components: {},
  setup() {
    const asideVisible = ref(false);
    provide('asideVisible', asideVisible);
  }
}
</script>
<style lang="scss" scoped>
  
</style>
