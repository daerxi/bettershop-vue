<template>
  <div class="flex flex-wrap">
    <div class="absolute top-0 right-0 sm:p-1 p-12">
      <round-image class="w-full" :user="user" :redirect="redirectLink"></round-image>
      <ul class="flex grid grid-cols-1">
        <li v-if="authenticated" class="flex-auto text-center w-16 py-1">
          <action-button :fn="edit" title="Edit"></action-button>
        </li>
        <li v-if="authenticated" class="flex-auto text-center py-1 w-16">
          <action-button :fn="logout" title="Logout"></action-button>
        </li>
        <li v-if="!authenticated" class="flex-auto text-center w-16 py-1">
          <action-button :fn="login" title="Login"></action-button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import RoundImage from "@/components/RoundImage";
import { clearCookies, userAvatar, verifyAuth } from "@/utils/validation";
import UsersService from "@/api/UsersService";
import ActionButton from "@/components/ActionButton";
import { router } from "@/router";
import { avoidDuplicatedNavigation } from "@/utils/helper";

export default {
  name: "ProfileComponent",
  components: {ActionButton, RoundImage},
  data() {
    return {
      redirectLink: '',
      authenticated: this.$cookies.isKey('authenticated'),
      photo: String,
      user: {
        id: 0,
        avatar: ''
      }
    }
  },
  async created() {
    await verifyAuth()
    await UsersService.getMe()
        .then(async res => {
          this.user = res.data
          await this.getAuth()
        })
        .catch(e => console.warn(e))
        await this.getAuth()
  },
  methods: {
    async logout() {
      await UsersService.logoutUser().then(async () => {
        await clearCookies()
        await router.push('/').then(window.location.reload()).catch(e => avoidDuplicatedNavigation(e))
      }).catch(e => console.log(e))
    },
    async getAuth() {
      this.authenticated = this.$cookies.isKey('authenticated')
      this.photo = userAvatar()
      this.user.id = this.$cookies.get('user-id')
      this.redirectLink = "/profile/" + this.user.id
    },
    async edit() {
      await router.push('/business/edit').then().catch(e => avoidDuplicatedNavigation(e))
    },
    async login() {
      await router.push('/login').then().catch(e => avoidDuplicatedNavigation(e))
    }
  }
}
</script>

<style scoped>

</style>