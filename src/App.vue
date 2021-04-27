<template>
  <div id="app">
    <h1 class="bold text-5xl">BetterShop</h1>
    <ProfileButton></ProfileButton>
    <SearchBar></SearchBar>
  </div>
</template>

<script>

import ProfileButton from "@/components/ProfileButton";
import SearchBar from "@/components/SearchBar";

export default {
  name: 'App',
  components: {
    SearchBar,
    ProfileButton
  },
  data() {
    return {
      authenticated: false
    }
  },
  async created() {
    try {
      // verify user token
      // const token = localStorage.getItem('user-token')
    } catch (err) {
      this.error = err
    }
  },
  async updated() {
    try {
      localStorage.getItem('')
      //
    } catch (err) {
      //
    }
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
