<template>
  <div class="flex flex-wrap">
    <div class="absolute top-0 right-0 sm:p-1 p-12">
      <round-image class="w-full" :user="user" :redirect="redirectLink"></round-image>
      <ul class="flex grid grid-cols-1">
        <li v-if="authenticated" class="-mb-px mr-2 last:mr-0 flex-auto text-center w-20 py-1"
            v-on:click="edit">
          <action-button title="Edit"></action-button>
        </li>
        <li v-if="authenticated" class="-mb-px mr-2 last:mr-0 flex-auto text-center w-20 py-1"
            v-on:click="logout">
          <action-button title="Logout"></action-button>
        </li>
        <li v-if="!authenticated" class="-mb-px mr-2 last:mr-0 flex-auto text-center w-20 py-1"
            v-on:click="login">
          <action-button title="Login"></action-button>
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
import ActionButton from "@/components/ActionButton";

export default {
  name: "ProfileComponent",
  components: {ActionButton, RoundImage},
  data() {
    return {
      redirectLink: '',
      authenticated: false,
      photo: String,
      user: {
        id: 0,
        avatar: ''
      }
    }
  },
  async created() {
    await verifyAuth()
    await UsersService.getMe().then(async res => this.user = res.data).catch(e => console.warn(e))
    await this.getAuth()
    this.redirectLink = "/profile/" + userId()
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
      this.user.id = userId()
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