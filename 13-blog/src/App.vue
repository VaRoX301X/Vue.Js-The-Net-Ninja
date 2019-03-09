<template>
  <div id="app">
    <add-blog></add-blog>
    <show-blogs></show-blogs>
  </div>
</template>

<script>
import addBlog from "./components/addBlog";
import showBlogs from './components/showBlogs';
export default {

  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    'add-blog': addBlog,
    'show-blogs': showBlogs
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
