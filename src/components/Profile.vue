<template>
  <div class="flex flex-wrap">
    <div>
      <round-image :is-nav="true" class="w-full" :user="user" :redirect="redirectLink"></round-image>
    </div>
  </div>
</template>

<script>
import RoundImage from "@/components/RoundImage";
import { userAvatar, verifyAuth } from "@/utils/validation";
import UsersService from "@/api/UsersService";

export default {
  name: "ProfileComponent",
  components: {RoundImage},
  data() {
    return {
      redirectLink: '',
      authenticated: this.$cookies.get('authenticated') === 'true',
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
    if (this.authenticated)
      await UsersService.getMe()
          .then(async res => {
            this.user = res.data
            this.authenticated = this.$cookies.isKey('authenticated')
            this.photo = userAvatar()
            this.user.id = this.$cookies.get('user-id')
            this.redirectLink = "/profile/" + this.user.id
          }).catch(e => console.warn(e))
    else
      this.redirectLink = "/login"
  }
}
</script>

<style scoped>

</style>