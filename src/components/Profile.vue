<template>
  <div class="flex flex-wrap">
    <div>
      <round-image :is-nav="true" class="w-full" :user="user" :redirect="redirectLink"/>
    </div>
  </div>
</template>

<script>
import RoundImage from "@/components/RoundImage";
import { verifyAuth } from "@/utils/validation";

export default {
  name: "ProfileComponent",
  components: {RoundImage},
  data() {
    return {
      redirectLink: '',
      authenticated: this.$cookies.get('authenticated') === 'true',
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
      this.redirectLink = "/profile/" + this.$cookies.get('user-id')
    else
      this.redirectLink = "/login"
  }
}
</script>

<style scoped>

</style>