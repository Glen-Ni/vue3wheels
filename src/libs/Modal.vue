<template>
  <div class="hao-modal-overlay">
    <div class="hao-moadal-wrapper">
      <header>标题</header>
      <main>内容</main>
      <footer>
        <Button level="primary">缺点</Button>
        <Button>取消</Button>
      </footer>
    </div>
  </div>
</template>
<script>
import Button from "./Button.vue";
export default {
  name: "Modal",
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    Button,
  },
};
</script>
<style lang="scss">
  
</style>