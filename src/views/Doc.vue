<template>
  <div>
    <TopNav />
  </div>
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
          <router-link to="/doc/dialog">Dialog 组件</router-link>
        </li>
        <li>
          <router-link to="/doc/tabs">Tabs 组件</router-link>
        </li>
      </ol>
    </aside>
    <main>主内容区</main>
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
  },
};
</script>