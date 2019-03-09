<template>

    <div v-theme:column="'narrow'" id="show-blogs">
      <h1>All Blg Articles</h1>
      <input type="text" v-model="search" placeholder="search blogs">
      <div v-for="blog in filteredBlogs" class="single-blog">
        <h2 v-rainbow>{{ blog.title | to-uppercase}}</h2>
        <article>{{ blog.body | shortener }}</article>
        

      </div>
    </div>
</template>

<script>
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
          this.$http.get('https://jsonplaceholder.typicode.com/posts').then(function(data){
            console.log(data);
            this.blogs = data.body.slice(0,10);
          })
      },
      computed: {
          filteredBlogs: function() {
            return this.blogs.filter((blog) => {
              return blog.title.match(this.search);
            });
          }
      }
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
