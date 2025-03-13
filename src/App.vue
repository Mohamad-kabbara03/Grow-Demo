<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Home from '@/Views/Home.vue';
import 'bootstrap/dist/css/bootstrap.min.css';  // Make sure this is included
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
export default {
  name: 'App',
  components: {
    Home,
  },
};
</script>

<style scoped lang="scss">
#app {
  font-family: 'Arial', sans-serif;
}
</style>
