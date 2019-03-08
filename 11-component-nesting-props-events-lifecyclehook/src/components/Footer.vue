<template>
    <footer>
      <p>{{copyright}} {{title}}</p>
      <button v-on:click="title='holaaa'">update</button>
      <p>Bus de eventos: {{busTitle}}</p>
    </footer>
</template>

<script>
  import {bus} from '../main';
    export default {
        name: "Footer",
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
          return{
            copyright: 'Copyright 2019'
          }
      },
      created(){
          bus.$on('titleBusChanged', (data) => {
            this.busTitle = data;
          })
      }
    }
</script>

<style scoped>
  footer {
    background: #222222;
    padding: 6px;
  }
  p {
    color: #456;
    text-align: center;
  }
</style>
