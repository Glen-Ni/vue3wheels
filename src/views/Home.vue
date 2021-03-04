<template>
  <TopNav />
  <div class="banner">
    <h1>好家伙 UI</h1>
    <h2>用了好家伙UI，我直呼好家伙!</h2>
    <p class="actions">
      <a href="###">GitHub</a>
      <a href="#/doc">开始</a>
    </p>
  </div>
</template>

<script lang="ts">
import TopNav from "../components/TopNav.vue";
export default {
  name: "Home",
  components: {
    TopNav,
  },
};
</script>
<style lang="scss" scoped>
.banner {
  height: 500px;
  padding: 100px;
  h1 {
    font-size: 30px;
    line-height: 60px;
  }
  h2 {
    font-size: 24px;
    line-height: 30px;
  }
  .actions {
    a {
      display: inline-block;
      margin: 24px 8px;
      line-height: 24px;
      width: 80px;
      border: 1px solid #888;
      border-radius: 12px;
      color: #777;
      background-color: #fff;
    }
  }
}
</style>
