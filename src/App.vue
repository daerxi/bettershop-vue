<template>
  <div id="app">
    <h1 class="bold text-5xl">BetterShop</h1>
    <ProfileButton></ProfileButton>
    <SearchBar></SearchBar>
  </div>
</template>

<script>
// import RegisterUser from './components/RegisterUser.vue'
// import LoginUser from "@/components/LoginUser";

import ProfileButton from "@/components/ProfileButton";
import SearchBar from "@/components/SearchBar";
export default {
  name: 'App',
  components: {
    SearchBar,
    ProfileButton
    // LoginUser,
    // RegisterUser
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
