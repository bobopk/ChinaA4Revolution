<template>
  <div class="home">
    <TimeMap docId="https://docs.google.com/spreadsheets/u/1/d/1V94J2fN9bAA6mSw_o1cIOVsP7EYOdn2jQChshGRCi3M/pub?output=csv"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TimeMap from './components/TimeMap.vue'

export default defineComponent({
  name: 'home',
  components: {
    TimeMap
  }
})
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    height: 100%;
  }

  #nav {
  }

  #nav a {
    font-weight: bold;
    color: #2c3e50;
  }

  #nav a.router-link-exact-active {
    color: #42b983;
  }

  html, body {
    height: 100%;
    margin: 0;
    padding: 0;
  }

  .home {
    height: 100%;
  }
</style>
