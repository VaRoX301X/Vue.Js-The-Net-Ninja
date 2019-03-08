<template>
  <div>
    <h1>{{ title }}</h1>
    <ninjas></ninjas>
  </div>
</template>

<script>
import ninjas from './ninjas.vue'


export default {
  components:{
    'Ninjas':ninjas
  },
  name: 'app',
  data () {
    return {
      title:'Xorav ninja App'
    }
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
  color: aquamarine;
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
