<template>
    <nav-bar />
  <router-view/>
</template>

<script>
  import NavBar from "@/components/NavBar.vue"
  export default {
    name: 'App',
    components: {
      NavBar
    }
  }
  </script>

<style>
  body {
    background-color: #f2f2f2;
  }
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #555;
  margin: 0 auto;
  max-width: 600px;
}

</style>
