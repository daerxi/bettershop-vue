<template>
  <div class="flex flex-wrap">
    <div class="w-16 px-4 absolute top-0 right-0 px-16 py-12">
      <round-image :user="user"></round-image>
      <div class="inline-flex py-4">
        <button v-if="authenticated" class="bg-gray-300 hover:bg-gray-500 text-blue-700 font-bold py-1 rounded"
                v-on:click="logout">Logout
        </button>
        <router-link v-else class="no-underline" to="/login">
          <button class="bg-gray-300 hover:bg-gray-500 text-blue-700 font-bold py-1 rounded">Login</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import RoundImage from "@/components/RoundImage";
import { isAuthenticated, userAvatar, userId, userToken, verifyAuth } from "@/utils/validation";
import UsersService from "@/api/UsersService";
import { router } from "@/router";

export default {
  name: "ProfileComponent",
  components: {RoundImage},
  data() {
    return {
      redirectLink: "/profile",
      authenticated: Boolean,
      photo: String,
      user: {
        avatar: ''
      },
      userId: Number
    }
  },
  async created() {
    await verifyAuth()
    if (this.$route.name === 'User Profile') {
       await UsersService.getUser(this.$route.params.id).then(async res=> {
         this.user = res.data
       })
    } else {
      this.user.avatar = userAvatar()
    }
    await this.getAuth()
  },
  methods: {
    async logout() {
      await UsersService.logoutUser(userToken()).then(() => {
        localStorage.clear()
        router.push('/')
      }).catch(e => console.log(e))
      await this.getAuth()
    },
    async getAuth() {
      this.authenticated = isAuthenticated()
      this.photo = userAvatar()
      this.userId = userId()
    }
  }
}
</script>

<style scoped>

</style>