<template>
    <div class="add-smoothie container">
      <h2 class="center-align indigo-text">Add New Smoothie Recipe</h2>
      <form v-on:submit.prevent="AddSmoothie">
        <div class="field title">
          <label for="title">Smoothie Title:</label>
          <input type="text" name="title" v-model="title">
        </div>
        <div class="field add-ingredient">
          <label for="add-ingredient">Add an ingredient:</label>
          <input type="text" name="add-ingredient">
        </div>
        <div class="field center-align">
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

          }
      },
      methods:{
          AddSmoothie: function () {
            console.log(this.title);
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
