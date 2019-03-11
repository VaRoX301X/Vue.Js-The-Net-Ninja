<template>
    <div id="view-profile">
      <h2>PROFILE</h2>
      <h3>User Id: {{ userId }}</h3>

    </div>
</template>

<script>
    export default {
        name: "ViewProfile",
      data () {
          return {
            userId: this.$route.params.user_id
          }
      },
      watch: {
          $route: 'updateId'
      },
      methods: {
          updateId: function () {
            this.userId = this.$route.params.user_id;
          }
      }
    }
</script>

<style scoped>

</style>
