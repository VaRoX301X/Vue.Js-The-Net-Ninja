<template>
    <div class="login container">
      <form class="card-panel" @submit.prevent="login">
        <h2 class="center deep-purple-text">
          Login
        </h2>
        <div class="field">
          <label for="email">Email</label>
          <input type="email" name="email" v-model="email">
        </div>
        <div class="field">
          <label for="password">Password</label>
          <input type="password" name="password" v-model="password">
        </div>
        <p v-if="feedback" class="red-text center">{{feedback}}</p>
        <div class="field">
          <button class="btn deep-purple">
            Login
          </button>
        </div>
      </form>
    </div>
</template>

<script>
    export default {
        name: "Login",
      data(){
          return {
            email: null,
            password: null,
            feedback: null
          }
      },
      methods: {
          login(){

          }
      }
    }
</script>

<style scoped>
  .login{
    max-width: 23rem;
    margin-top: 4rem;
  }
  .login h2 {
    font-size: 2.4rem;
  }
  .login .field {
    margin-bottom: 1rem;
  }
</style>
