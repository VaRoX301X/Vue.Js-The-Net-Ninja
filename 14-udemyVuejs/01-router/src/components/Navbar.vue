<template>
    <div id="Navbar">
      <ul>
        <li><router-link :to="{ name: 'Home' }">Home</router-link></li>
        <li><router-link :to="{ name: 'About' }">About</router-link></li>
      </ul>
      <h2>User profiles</h2>
      <ul>
        <li v-for="(id, index) in userIds" :key="index">
          <router-link :to="{ name: 'ViewProfile', params: { user_id: id}}">Profile {{ index }}</router-link>
        </li>
      </ul>
      <h2>Navigation controls</h2>
      <ul>
        <li><button v-on:click="goBack">Back</button></li>
        <li><button v-on:click="goHome">Redirect to Home</button></li>
        <li><button v-on:click="goForward">Forward</button></li>
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
      },
      methods: {
          goHome() {
            this.$router.push({ name: 'Home' })
          },
        goBack() {
            this.$router.go(-1)
        },
        goForward() {
            this.$router.go(+1)
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
  li {
    display: inline-block;
    margin: 10px;
  }
  .router-link-exact-active {
    color: orangered;
  }
</style>
