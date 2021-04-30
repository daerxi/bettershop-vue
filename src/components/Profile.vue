<template>
  <div class="flex flex-wrap">
    <div class="w-16 px-4 absolute top-0 right-0 px-16 py-12">
      <round-image :user="user"></round-image>
      <ul class="flex grid grid-cols-1">
        <li v-if="authenticated" class="-mb-px mr-2 last:mr-0 flex-auto text-center w-20 py-1"
            v-on:click="edit">
          <a class="text-xs font-bold px-5 py-3 shadow-lg rounded block leading-normal text-blueGray-600 bg-gray-100">
            Edit
          </a>
        </li>
        <li v-if="authenticated" class="-mb-px mr-2 last:mr-0 flex-auto text-center w-20 py-1"
            v-on:click="logout">
          <a class="text-xs font-bold px-5 py-3 shadow-lg rounded block leading-normal text-blueGray-600 bg-gray-100">
            Logout
          </a>
        </li>
        <li v-if="!authenticated" class="-mb-px mr-2 last:mr-0 flex-auto text-center w-20 py-1"
            v-on:click="login">
          <a class="text-xs font-bold px-5 py-3 shadow-lg rounded block leading-normal text-blueGray-600 bg-gray-100">
            Login
          </a>
        </li>
      </ul>
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
      authenticated: false,
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
      await UsersService.getUser(this.$route.params.id).then(async res => {
        this.user = res.data
      })
    } else {
      this.user.avatar = userAvatar()
    }
    await this.getAuth()
  },
  methods: {
    async logout() {
      await UsersService.logoutUser(userToken()).then(async () => {
        localStorage.clear()
        await router.push('/')
      }).catch(e => console.log(e))
      await this.getAuth()
    },
    async getAuth() {
      this.authenticated = isAuthenticated()
      this.photo = userAvatar()
      this.userId = userId()
    },
    async edit() {
      await router.push('/business/edit')
    },
    async login() {
      await router.push('/login')
    }
  }
}
</script>

<style scoped>

</style>