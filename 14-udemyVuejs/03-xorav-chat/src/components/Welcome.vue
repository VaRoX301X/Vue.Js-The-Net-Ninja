<template>
  <div class="welcome container">
    <div class="card">
      <div class="card-content center-align">
        <h2 class="teal-text">Welcome</h2>
        <form @submit.prevent="enterChat">
          <label for="name">Enter your name:</label>
          <input type="text" id="name" v-model="name">
          <p class="red-text" v-if="feedback">{{ feedback }}</p>
          <button class="btn teal">Enter Chat</button>
        </form>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'welcome',
  data () {
    return {
      name: null,
      feedback: null
    }
  },
  methods: {
    enterChat(){
      if(this.name){
        console.log(this.name);
        this.feedback = null;
        this.$router.push({ name: 'Chat', params: { name: this.name }});
      } else {
        this.feedback = 'You must enter a name';
      }

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .welcome {
    max-width: 23rem;
    margin-top: 7rem;
  }
  .welcome h2 {
    font-size: 3rem;
  }
  .welcome button {
    margin: 2rem auto;
  }
</style>
