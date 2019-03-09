<template>
    <div id="add-blog">
      <h2>Add a new blog post</h2>
      <form v-if="!submitted">
        <label>Blog title</label>
        <input type="text" required v-model.lazy="blog.title">
        <br>
        <label>Blog content</label>
        <textarea v-model.lazy="blog.content"></textarea>
        <div id="checkboxes">
          <label>Ninjas</label>
          <input type="checkbox" value="ninjas" v-model="blog.categories"> <!-- lo añade directamente al array -->
          <label>Wizards</label>
          <input type="checkbox" value="wizards" v-model="blog.categories">
          <label>Warriors</label>
          <input type="checkbox" value="warriors" v-model="blog.categories">
          <label>Thiefs</label>
          <input type="checkbox" value="thiefs" v-model="blog.categories">
        </div>
        <label for="">Author:</label>
        <select v-model="blog.author">
          <option v-for="author in authors">{{ author }}</option>
        </select>
      </form>
      <div v-if="submitted">
        <h4>Thanks for the post</h4>
      </div>
      <button v-on:click.prevent="post">Add blog</button>
      <div id="preview">
        <h3>Preview blog</h3>
        <p>Blog title: {{blog.title}}</p>
        <p>Blog content:</p>
        <p>{{ blog.content }}</p>
        <p>Blog categories:</p>
        <ul>
          <li v-for="cat in blog.categories">{{ cat }}</li>
        </ul>
        <p>Author: {{ blog.author }}</p>
      </div>
    </div>
</template>

<script>
    export default {
      data() {
        return {
          blog:{
            title:'',
            title:'',
            categories: [],
            author: ''
          },
          authors:['Varox','The Angular Avenger', 'The Vue Vindicator'],
          submitted: false
        }
      },
      methods: {
        post: function(){
          this.$http.post('https://thenetninjavuejs-422a5.firebaseio.com/posts.json', this.blog).then(function(data){
            console.log(data);
            this.submitted = true;
          });
        }
      }
    }

</script>

<style lang="scss">
  #checkboxes input{
    display: inline-block;
    margin-right: 10px;
  }
  #checkboxes label {
    display: inline-block;
  }
  #add-blog *{
    box-sizing: border-box;
  }
  #add-blog{
    margin: 20px auto;
    max-width: 500px;
  }
  label{
    display: block;
    margin: 20px 0 10px;
  }
  input[type="text"], textarea{
    display: block;
    width: 100%;
    padding: 8px;
  }
  #preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
  }
  h3{
    margin-top: 10px;
  }
</style>
