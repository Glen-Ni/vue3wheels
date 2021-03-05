<template>
  <div class="topNav">
    <div class="logo">好家伙UI</div>
    <div class="menu">
      <router-link to="/">Home</router-link>
      <router-link to="/doc">文档</router-link>
    </div>
    <span class="toogleAside" @click="toogleAside"> </span>
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
    const toogleAside = () => {
      asideVisible.value = !asideVisible.value;
    };
    return { toogleAside };
  },
};
</script>
<style lang="scss" scoped>
.topNav {
  background-color: yellow;
  display: flex;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  align-items: center;
  justify-content: center;
  > .logo {
    margin-right: auto;
  }
  > .menu {
    display: flex;
    > a {
      margin: 0 1em;
    }
  }
  > .toogleAside {
    position: absolute;
    top: 50%;
    left: 16px;
    transform: translateY(-50%);
    width: 30px;
    height: 30px;
    background-color: red;
    cursor: pointer;
    display: none;
  }
  @media (max-width: 500px) {
    > .menu {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
    > .toogleAside {
      display: block;
    }
  }
}
</style>
