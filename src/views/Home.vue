<template>
  <TopNav />
  <div class="banner">
    <h1>好家伙 UI</h1>
    <h2>用了好家伙UI，我直呼好家伙!</h2>
    <p class="actions">
      <a href="https://github.com/Glen-Ni/vue3wheels">GitHub</a>
      <router-link to="/doc">开始</router-link>
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
      $h: 28px;
      height: $h;
      line-height: $h;
      width: 80px;
      border: 1px solid #888;
      border-radius: $h/2;
      color: #777;
      background-color: #fff;
    }
  }
}
</style>
