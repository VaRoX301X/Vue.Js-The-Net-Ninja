<template>

  <div v-theme="'wide'" id="show-blogs">
    <h1>All Blg TITLES</h1>
    <input type="text" v-model="search" placeholder="search blogs">
    <div v-for="blog in filteredBlogs" class="single-blog">
      <h2 v-rainbow>{{ blog.title | to-uppercase}}</h2>
    </div>
  </div>
</template>

<script>
  import searchMixin from '../mixins/searchMixin';
  export default {
    name: "listBlogs",
    data(){
      return {
        blogs: [],
        search: ''
      }
    },
    methods: {

    },
    created() {
      this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
        console.log(data);
        this.blogs = data.body.slice(0,10);
      })
    },
    filters: {
      // Registrar filtro de manera local
      'to-uppercase': function (value) {
        return value.toUpperCase();
      }
    },
    mixins: [searchMixin]
  }

</script>

<style scoped>
  #show-blogs{
    max-width: 800px;
    margin: 0 auto;
  }
  .single-blog{
    padding: 20px;
    margin: 20px 0;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    background: #eee;
  }
</style>
