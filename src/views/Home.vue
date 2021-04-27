<template>
  <div>
    <profile-button></profile-button>
    <search-bar></search-bar>
  </div>
</template>

<script>
import SearchBar from "@/components/SearchBar";
import ProfileButton from "@/components/Profile";

export default {
  name: "Home.vue",
  components: {
    SearchBar,
    ProfileButton
  },
  data() {
    return {
      authenticated: false,
      user: {}
    }
  },
  async created() {
    try {
      // verify user token
      // const token = localStorage.getItem('user-token')
      // if authenticated, get user -> profile photo
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

<style scoped>

</style>