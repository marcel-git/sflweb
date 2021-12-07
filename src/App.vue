<template>
  <div class="one">
    <div class="app-menubar">
      <div class="app-menubar-left">
        <h1><b>Booker</b></h1>
        <div class="element"><router-link to="/">Search</router-link></div>
        <div class="element"><router-link to="/publish">Publish</router-link></div>
      </div>
      <div class="app-menubar-right">
        <div class="element"><router-link to="/help">Help</router-link></div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
  @import "assets/styles/main.css";
  .app-database,.app-publish, .app-profile{
    background-image: url("../public/background.jpg");
  }
</style>
