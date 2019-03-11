<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
  import Index from "./components/Index";
  import Navbar from "./components/Navbar";

  export default {
    name: 'app',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: {
      'index': Index,
      'navbar': Navbar
    }
  }
</script>

<style lang="scss">

</style>
