<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
  import Home from "./components/Home";
  import Navbar from "./components/Navbar";

  export default {
    name: 'app',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: {
      'home': Home,
      'navbar': Navbar
    }
  }
</script>

<style lang="scss">

</style>
