<template>
    <div class="chat container">
      <h2>Chat</h2>
      <h3>{{name}}</h3>
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

</style>
