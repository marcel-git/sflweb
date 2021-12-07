<template>
    <div class="app-database">
        <h1><b>Search Database</b></h1>
        <input v-model="id" type="text" placeholder="Search for a name"/>
        <div class="result">
            <div class="entry" v-for="item in items" :key="item">
              Title: {{item[1]}} | Author: {{item[2]}} | {{item[3]}}
            </div>
          <button v-on:click="search">Search</button>
          {{result}}
        </div>
    </div>
</template>

<script>
    import {sendRequest} from "@/assets/backend_service";

    export default {
        name: "Database",
        data: function () {
            return{
                id: "",
                items: []
            }
        },
        methods: {
          search: async function () {
            var result = sendRequest(this.id)
            this.items = result
          }
        }
    }

</script>

<style scoped>
@import "../assets/styles/database.css";
</style>