<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
  import Index from "./components/Index";
  import Navbar from "./components/Navbar";
  import addSmoothie from "./components/addSmoothie";
  import editSmoothie from "./components/editSmoothie";

  export default {
    name: 'app',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    components: {
      'index': Index,
      'navbar': Navbar,
      'add-smoothie': addSmoothie,
      'edit-smoothie': editSmoothie
    }
  }
</script>

<style lang="scss">

</style>
