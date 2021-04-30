<template>
  <button v-on:click="redirectToProfile" class="bg-transparent border-none w-20 h-20">
    <img :src="user.avatar"
         class="inline object-cover border-none w-16 h-16 mr-2 rounded-full"/>
  </button>
</template>

<script>
import { emptyAvatar, isBusiness, userId, userToken } from "@/utils/validation";
import { router } from "@/router";
import BusinessService from "@/api/BusinessService";

export default {
  name: "RoundImage",
  props: ['user'],
  data() {
    return {
      business: {}
    }
  },
  async created() {
    if (!this.user.avatar) this.user.avatar = emptyAvatar
  },
  methods: {
    async redirectToProfile() {
      if (this.user.userId === userId()) {
        if (isBusiness()) {
          await router.push('/business/profile')
        } else {
          await router.push('/profile')
        }
      } else {
        await BusinessService.getBusinessByUserId(userToken(), this.user.id)
            .then(async res => {
              this.business = res.data
            })
        await router.push('/businesses/' + this.business.id)
      }
    }
  }
}
</script>

<style scoped>

</style>