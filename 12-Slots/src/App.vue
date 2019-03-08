<template>
  <div>
    <form-helper>
      <div slot="form-header-slot">
        <h3>This is the title of the form</h3>
        <p>Information</p>
      </div>
      <div slot="form-fields-slot">
        <input type="text" placeholder="name" required />
        <input type="password" placeholder="password" required />
      </div>
      <div slot="form-controls-slot">
        <button v-on:click="handleSubmit">Submit</button>
      </div>
    </form-helper>
  </div>
</template>

<script>
  import formHelper from './components/formHelper.vue';
  import formTwo from './components/formTwo.vue';
export default {
    components:{
      'form-helper': formHelper,
      'form-two': formTwo
    },
  name: 'app',
  data () {
    return {
      title: 'I am a dynamic title'
    }
  }
}
</script>

<style lang="scss">

</style>
