<template>

    <div v-theme:column="'narrow'" id="show-blogs">
      <h1>All Blg Articles</h1>
      <input type="text" v-model="search" placeholder="search blogs">
      <div v-for="blog in filteredBlogs" class="single-blog">
        <router-link v-bind:to="'/blog/' + blog.id"><h2 v-rainbow>{{ blog.title | to-uppercase}}</h2></router-link>
        <article>{{ blog.content | shortener }}</article>
      </div>
    </div>
</template>

<script>
  import searchMixin from '../mixins/searchMixin';
    export default {
        name: "showBlogs",
      data(){
          return {
            blogs: [],
            search: ''
          }
      },
      methods: {

      },
      created() {
          this.$http.get('https://thenetninjavuejs-422a5.firebaseio.com/posts.json').then(function(data){
            return data.json();
          }).then(function(data){
            var blogsArray = [];
            for (let key in data){
              data[key].id = key; // añade a cada objeto el id unico que es el nombre del objeto
              blogsArray.push(data[key]);
            }
            console.log(blogsArray);
            this.blogs = blogsArray; // Se añaden despues del for para tenerlos todos
          })
      },
      computed: {

      },
      filters: {
        // Registrar filtro de manera local
        'to-uppercase': function (value) {
          return value.toUpperCase();
        },
        toLowercase(value){
          return value.toLowerCase();
        }
      },
      directives: {
          // igual que globalmente
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
