<template>
  <div class="topNav">
    <div class="logo" @click="toggleMenu">好家伙UI</div>
    <div class="menu">
      <router-link to="/">Home</router-link>
      <router-link to="/doc">文档</router-link>
    </div>
  </div>
  <hr />
</template>

<script>
import { inject } from "vue";
export default {
  name: "TopNav",
  components: {},
  setup() {
    const asideVisible = inject("asideVisible");
    console.log("topnav中：", asideVisible.value);
    const toggleMenu = () => {
      asideVisible.value = !asideVisible.value;
      console.log("clicked");
    };
    return { toggleMenu };
  },
};
</script>
<style lang="scss" scoped>
.topNav {
  background-color: yellow;
  display: flex;
  padding: 16px;
  z-index: 10;
  > .logo {
    margin-right: auto;
    cursor: pointer;
  }
  > .menu {
    display: flex;
    > a {
      margin: 0 1em;
    }
  }
}
</style>
