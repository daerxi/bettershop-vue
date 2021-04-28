<template>
  <div class="flex flex-wrap">
    <div class="w-16 px-4 absolute top-0 right-0 px-12 py-12">
      <round-image v-bind:photo="photo" v-bind:redirect-link="redirectLink"></round-image>
      <div class="inline-flex py-4">
        <router-link class="no-underline" to="/login">
          <button class="bg-gray-300 hover:bg-gray-500 text-blue-700 font-bold py-1 rounded">Login</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import RoundImage from "@/components/RoundImage";
export default {
  name: "ProfileComponent",
  components: {RoundImage},
  data() {
    return {
      redirectLink: "/profile",
      authenticated: localStorage.getItem('authenticated') || false,
      photo: this.authenticated ? "https://imgur.com/uF05hWw.png" : "https://imgur.com/uF05hWw.png"
    }
  },
  methods: {}
}
</script>

<style scoped>

</style>