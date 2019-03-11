<template>
    <div class="navbar">
      <nav class="nav-extended indigo darken-2">
        <div class="nav-content">
          <router-link to="">
            <span class="nav-title">Xorav Smoothies</span>
          </router-link>
          <a href="" class="btn-floating btn-large halfway-fab pink pulse">
            <router-link to="">
              <i class="material-icons">add</i>
            </router-link>
          </a>
        </div>
      </nav>
    </div>
</template>

<script>
    export default {
        name: "Navbar",
      data(){
          return {

          }
      }
    }
</script>

<style scoped>
  .navbar nav {
    padding: 0 1.2rem;
  }
</style>
