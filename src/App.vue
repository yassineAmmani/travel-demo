<template>

  <apphead />
  <appfoo />
  

</template>
<script>
import appfoo from './components/footer.vue'
import apphead from './components/header.vue'



export default {
  components: {appfoo,apphead},
  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
