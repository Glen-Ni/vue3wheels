<template>
  <div class="layout">
    <TopNav class="nav" />
    <div class="content">
      <aside v-if="asideVisible">
        <h2>组件列表</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/modal">Modal 组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs 组件</router-link>
          </li>
        </ol>
      </aside>
      <main>
        <router-view />
      </main>
    </div>
  </div>
</template>
<script>
import { inject } from "vue";
import TopNav from "../components/TopNav.vue";
export default {
  name: "Home",
  components: {
    TopNav,
  },
  setup() {
    const asideVisible = inject("asideVisible");
    console.log("doc中：", asideVisible);
    return { asideVisible };
  },
};
</script>
<style lang="scss">
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .nav {
    flex-shrink: 0;
  }
  > .content {
    flex: 0;
  }
}

.content {
  display: flex;
  > aside {
    flex-shrink: 0;
  }
  > main {
    $asideWidth: 150px;
    flex-grow: 1;
    padding: 16px;
    padding-left: $asideWidth + 16px;
    padding-top: 60px;
  }
}
aside {
  background: lightblue;
  width: 150px;
  padding: 16px;
  position: fixed;
  top: 0;
  left: 0;
  padding-top: 70px;
  height: 100%;
  > h2 {
    margin-bottom: 4px;
  }
  > ol {
    > li {
      padding: 4px 0;
    }
  }
}
</style>