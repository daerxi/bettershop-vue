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
        await BusinessService.getBusiness(userToken(), user.id)
        await router.push('/businesses/')
      }
    }
  }
}
</script>

<style scoped>

</style>