<template>
  <div id="app">
    <RegisterUser/>
  </div>
</template>

<script>
import RegisterUser from './components/RegisterUser.vue'

export default {
  name: 'App',
  components: {
    RegisterUser
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
