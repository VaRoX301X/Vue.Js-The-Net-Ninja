<template>
    <div class="chat container">
      <h2 class="center teal-text">Xorav Chat</h2>
      <div class="card">
        <div class="card-content">
          <ul class="messages">
            <li class="">
              <span class="teal-text">Name</span>
              <span class="grey-text text-darken-3">message</span>
              <span class="grey-text time">tine</span>
            </li>
          </ul>
        </div>
        <div class="card-action">
          <input type="text">
        </div>
      </div>

    </div>
</template>

<script>
    export default {
        name: "Chat",
      props: ['name'],
      data (){
          return {
            name: null,

          }
      },
      methods: {

      },
      created(){
        this.name = this.$route.params.name;
      }
    }
</script>

<style scoped>
  .chat h2{
    font-size: 2.6rem;
    margin-bottom: 2.3rem;
  }
  .chat span {
    font-size: 1.4rem;
  }
  .chat .time {
    display: block;
    font-style: 1.2rem;
  }
</style>
