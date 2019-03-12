<template>
    <div class="add-smoothie container">
      <h2 class="center-align indigo-text">Add New Smoothie Recipe</h2>
      <form v-on:submit.prevent="AddSmoothie">
        <div class="field title">
          <label for="title">Smoothie Title:</label>
          <input type="text" name="title" v-model="title">
        </div>
        <div v-for="(ing, index) in ingredients" :key="index">
          <label for="ingredient">Ingredient:</label>
          <input type="text" name="ingredient" v-model="ingredients[index]">
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
    export default {
        name: "addSmoothie",
      data (){
          return {
            title: null,
            another: null,
            ingredients: [],
            feedback: null
          }
      },
      methods:{
          AddSmoothie: function () {
            console.log(this.title);
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
  .add-smooothie .field {
    margin: 1.5rem auto;
  }
</style>
