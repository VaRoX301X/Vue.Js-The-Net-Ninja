<template>
    <div id="single-blog">
      <h1>{{ blog.title }}</h1>
      <article>{{ blog.content }}</article>
      <hr>
      <span>Autor: {{blog.author}}</span>
      <ul>
        <li v-for="category in blog.categories">{{category}}</li>
      </ul>
    </div>
</template>

<script>
    export default {
        name: "singleBlog",
      data(){
          return {
            id: this.$route.params.id,
            blog: {}
          }
      },
      created() {
          this.$http.get('https://thenetninjavuejs-422a5.firebaseio.com/posts/' + this.id + '.json').then(function(data){
            return data.json();
          }).then(function(data){
            this.blog = data;
          });
      }
    }
</script>

<style scoped>
#single-blog{
  max-width: 960px;
  margin: 0 auto;
}
</style>
