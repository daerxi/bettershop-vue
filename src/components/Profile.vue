<template>
  <div class="flex flex-wrap">
    <div>
      <round-image :is-nav="true" class="w-full" :user="user" :redirect="redirectLink"></round-image>
    </div>
  </div>
</template>

<script>
import RoundImage from "@/components/RoundImage";
import { clearCookies, userAvatar, verifyAuth } from "@/utils/validation";
import UsersService from "@/api/UsersService";
import { router } from "@/router";
import { avoidDuplicatedNavigation } from "@/utils/helper";

export default {
  name: "ProfileComponent",
  components: {RoundImage},
  data() {
    return {
      redirectLink: '',
      authenticated: this.$cookies.isKey('authenticated'),
      photo: String,
      user: {
        id: 0,
        avatar: '',
        userName: '',
        active: 0,
        email: '',
        isBusiness: false
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