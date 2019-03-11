<template>
    <div id="Navbar">
      <ul>
        <li><router-link :to="{ name: 'Home' }">Home</router-link></li>
        <li><router-link :to="{ name: 'About' }">About</router-link></li>
        <h2>User profiles</h2>
        <ul>
          <li v-for="(id, index) in userIds" :key="index">
            <router-link :to="{ name: 'ViewProfile', params: { user_id: id}}">Profile {{ index }}</router-link>
          </li>
        </ul>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "Navbar",
      data(){
          return {
            userIds: ['1','2','3','4']
          }
      }
    }
</script>

<style scoped>
  ul {
    list-style-type: none;
    padding: 0;
  }
  a {
    color: #42b983;
  }
</style>
