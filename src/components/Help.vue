<template>
    <div class="app-profile">
        <h1><b>Welcome</b></h1>
        <div class="text">
          <p>If you require any kind of assistance leave a note in the text box below, submit it and I'll have a look.</p>
          <p>Please be aware, publishing on this website requires you to be an admin!</p>
        </div>
        <div class="button-container">
            <input v-model="input" type="text" placeholder="Feedback">
            <button v-on:click="send">I require assistance</button>
        </div>
    </div>
</template>

<script>
    import {sendXSS} from "@/assets/backend_service";

    export default {
        name: "Help",
      data: function() {
          return{
            input: ""
          }
      },
      methods: {
          send: function (){
            sendXSS(this.input)
          }
      }
    }
</script>

<style scoped>
@import "../assets/styles/profile.css";
@import "../assets/styles/database.css";
</style>