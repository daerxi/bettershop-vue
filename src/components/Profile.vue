<template>
  <div class="flex flex-wrap">
    <div class="w-16 px-4 absolute top-0 right-0 px-12 py-12">
      <round-image v-bind:photo="photo" v-bind:redirect-link="redirectLink"></round-image>
      <div class="inline-flex py-4">
        <router-link v-if="!authenticated" class="no-underline" to="/login">
          <button class="bg-gray-300 hover:bg-gray-500 text-blue-700 font-bold py-1 rounded">Login</button>
        </router-link>
        <button class="bg-gray-300 hover:bg-gray-500 text-blue-700 font-bold py-1 rounded" v-on:click="logout">Logout</button>
      </div>
    </div>
  </div>
</template>

<script>
import RoundImage from "@/components/RoundImage";
import {isAuthenticated, userAvatar, userId} from "@/utils/validation";
import UsersService from "@/APIs/UsersService";
import {router} from "@/router";

export default {
  name: "ProfileComponent",
  components: {RoundImage},
  data() {
    return {
      redirectLink: "/profile",
      authenticated: isAuthenticated,
      photo: this.authenticated ? userAvatar : "https://imgur.com/uF05hWw.png",
      userId: userId
    }
  },
  methods: {
    async logout() {
      await UsersService.logoutUser(this.email, this.password).then(() => {
        router.push('/')
      }).catch(e => console.log(e))
      localStorage.clear();
    }
  }
}
</script>

<style scoped>

</style>