<template>
  <div class="topNav">
    <div class="logo">好家伙UI</div>
    <div class="menu">
      <router-link to="/">Home</router-link>
      <router-link to="/doc">文档</router-link>
    </div>
  </div>
  <hr />
</template>

<script>
export default {
  name: "TopNav",
  components: {},
};
</script>
<style lang="scss" scoped>
.topNav {
  background-color: yellow;
  display: flex;
  padding: 16px;
  > .logo {
    margin-right: auto;
  }
  > .menu {
    display: flex;
    > a {
      margin: 0 1em;
    }
  }
}
</style>
