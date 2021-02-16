<template>
  <div>
    <TopNav />
  </div>
  <div class="content">
    <aside>侧边栏</aside>
    <main>主内容区</main>
  </div>
</template>
<script>
import TopNav from "../components/TopNav.vue";
export default {
  name: "Home",
  components: {
    TopNav,
  },
};
</script>