<template>
  <div>
    导航栏
    <router-link to="/">fuck</router-link>
    |
    <router-link to="/fuck">fuck2</router-link>
  </div>
  <hr/>
  <router-view />
</template>

<script>
export default {
  name: 'App',
  components: {}
}
</script>
