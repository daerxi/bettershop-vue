<template>
  <div id="app">
    <h1 class="bold text-5xl">BetterShop</h1>
    <profile-button></profile-button>
    <search-bar></search-bar>
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar";
import ProfileButton from "@/components/ProfileButton";

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
}
</style>