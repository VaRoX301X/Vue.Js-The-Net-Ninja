<template>
    <header>
      <h1 v-on:click="changeTitle">{{ title }}</h1>
      <h2>{{busTitle}} <button v-on:click="changeBusTitle"></button></h2>
    </header>
</template>

<script>
  import {bus} from '../main';
    export default {
        name: "Header",
      props: {
        title: {
          type: String,
          required: true
        },
        busTitle: {
          type: String,
          required: true
        }
      },
      data(){
          return {

          }
      },
      methods: {

      changeTitle: function(){
        // emit an event
        this.$emit('changeTitle','Vue Wizards');
      },
        changeBusTitle: function(){
          this.busTitle = 'soy una locomotora';
          bus.$emit('titleBusChanged', 'soy una locomotora');
        }
      }
    }
</script>

<style scoped>
  header {
    background: lightgreen;
    padding: 10px;
  }
  h1 {
    color: #222;
    text-align: center;
  }
</style>
