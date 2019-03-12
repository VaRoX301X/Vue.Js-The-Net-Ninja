<template>
    <div class="add-smoothie container">
      <h2 class="center-align indigo-text">Add New Smoothie Recipe</h2>
      <form v-on:submit.prevent="AddSmoothie">
        <div class="field title">
          <label for="title">Smoothie Title:</label>
          <input type="text" name="title" v-model="title">
        </div>
        <div v-for="(ing, index) in ingredients" :key="index" class="relativo">
          <label for="ingredient">Ingredient:</label>
          <input type="text" name="ingredient" v-model="ingredients[index]">
          <i class="material-icons delete" @click="deleteIng(ing)">delete</i>
        </div>
        <div class="field add-ingredient">
          <label for="add-ingredient">Add an ingredient:</label>
          <input type="text" name="add-ingredient" v-on:keydown.tab.prevent="addIng" v-model="another">
        </div>
        <div class="field center-align">
          <p v-if="feedback" class="red-text">{{ feedback }}</p>
          <button class="btn pink">Add Smoothie</button>
        </div>
      </form>

    </div>
</template>

<script>
  import db from '../firebase/init';
  import slugify from 'slugify';
    export default {
        name: "addSmoothie",
      data (){
          return {
            title: null,
            another: null,
            ingredients: [],
            feedback: null,
            slug: null
          }
      },
      methods:{
          AddSmoothie: function () {
            if (this.title){
              this.feedback = null;
              // create slug
              this.slug = slugify(this.title, {
                replacement: '-',
                remove: /[$*_+~.()'"!\-:@]/g,
                lower: true
              });
              console.log(this.title);
              console.log(this.slug);
              console.log(this.ingredients);
              db.collection('smoothies').add({
                title: this.title,
                ingredients: this.ingredients,
                slug: this.slug
              }).then(() => {
                this.$router.push({ name: 'Index' });
              }).catch(err => {
                console.log(err);
              });
            } else {
              this.feedback = 'You must enter a Smoothie title'
            }
          },
        addIng() {
            if (this.another){
              this.ingredients.push(this.another);
              console.log(this.ingredients);
              this.another = null;
              this.feedback = null;
            } else {
              this.feedback = 'You must enter a value to add an ingredient';
            }
        },
        deleteIng(ing) {
            this.ingredients = this.ingredients.filter(ingredient => {
              return ingredient !== ing;
            });
        }
      }
    }
</script>

<style scoped>
  .add-smooothie {
    margin-top: 4rem;
    padding: 1.5rem;
    max-width: 30rem;
  }
  .add-smooothie h2 {
    font-size: 2rem;
    margin: 1.5rem auto;
  }

  .relativo {
    margin: 1.5rem auto;
    position: relative;
  }
  .delete {
    position: absolute;
    right: 0;
    bottom: 1rem;
    color: #aaa;
    font-size: 1.4rem;
    cursor: pointer;
  }
</style>
