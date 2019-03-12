<template>
  <div v-if="smoothie" class="edit-smoothie container">
    <h2>Edit {{ smoothie.title }}</h2>
    <form v-on:submit.prevent="editSmoothie">
      <div class="field title">
        <label for="title">Smoothie Title:</label>
        <input type="text" name="title" v-model="smoothie.title">
      </div>
      <div v-for="(ing, index) in smoothie.ingredients" :key="index" class="relativo">
        <label for="ingredient">Ingredient:</label>
        <input type="text" name="ingredient" v-model="smoothie.ingredients[index]">
        <i class="material-icons delete" @click="deleteIng(ing)">delete</i>
      </div>
      <div class="field add-ingredient">
        <label for="add-ingredient">Add an ingredient:</label>
        <input type="text" name="add-ingredient" v-on:keydown.tab.prevent="addIng" v-model="another">
      </div>
      <div class="field center-align">
        <p v-if="feedback" class="red-text">{{ feedback }}</p>
        <button class="btn pink">Update Smoothie</button>
      </div>
    </form>
  </div>
</template>

<script>
  import db from '../firebase/init';
  import slugify from 'slugify';
  export default {
    name: "editSmoothie",
    data() {
      return {
        smoothie: null,
        another: null,
        feedback: null
      }
    },
    methods: {
      // ----------------------------- UPDATE SMOOTHIE ----------------------------------------
      editSmoothie() {
        console.log(this.smoothie);
        if (this.smoothie.title){
          this.feedback = null;
          // create slug
          this.smoothie.slug = slugify(this.smoothie.title, {
            replacement: '-',
            remove: /[$*_+~.()'"!\-:@]/g,
            lower: true
          });
          db.collection('smoothies').doc(this.smoothie.id).update({
            title: this.smoothie.title,
            ingredients: this.smoothie.ingredients,
            slug: this.smoothie.slug
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
          this.smoothie.ingredients.push(this.another);
          console.log(this.smoothie.ingredients);
          this.another = null;
          this.feedback = null;
        } else {
          this.feedback = 'You must enter a value to add an ingredient';
        }
      },
      deleteIng(ing) {
        this.smoothie.ingredients = this.smoothie.ingredients.filter(ingredient => {
          return ingredient !== ing;
        });
      }
    },
    created() {
      let ref = db.collection('smoothies').where('slug', '==', this.$route.params.smoothie_slug);
      ref.get().then(snapshot => {
        snapshot.forEach(doc => {
          this.smoothie = doc.data();
          this.smoothie.id = doc.id;
          console.log(this.smoothie);
        })
      })
    }
  }
</script>

<style scoped>
  .edit-smooothie {
    margin-top: 4rem;
    padding: 1.5rem;
    max-width: 30rem;
  }

  .edit-smooothie h2 {
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
