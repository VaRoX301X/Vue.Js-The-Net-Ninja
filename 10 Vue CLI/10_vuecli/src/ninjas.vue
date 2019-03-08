<template>
  <div>
    <h1>list of ninjas</h1>
    <ul>
      <li v-for="ninja in ninjas">{{ninja}}</li>
    </ul>
  </div>

</template>

<script>
export default {
  data () {
    return {
      ninjas: ['JoJo','Naruto','Luffy']
    }
  }
}
</script>

<style scoped lang="scss">
  h1{
  color: darkkhaki;
  }
  ul {
    & li{
      color: hotpink;
    }
  }

</style>
