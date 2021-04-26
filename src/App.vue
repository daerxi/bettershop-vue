<template>
  <div id="app">
    <LoginUser/>
    <RegisterUser/>
  </div>
</template>

<script>
import RegisterUser from './components/RegisterUser.vue'
import LoginUser from "@/components/LoginUser";

export default {
  name: 'App',
  components: {
    LoginUser,
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
