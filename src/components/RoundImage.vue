<template>
  <button v-on:click="redirectToProfile" class="bg-transparent border-none w-20 h-20">
    <img :src="user.avatar"
         class="inline object-cover border-none w-16 h-16 mr-2 rounded-full"/>
  </button>
</template>

<script>
import { isBusiness } from "@/utils/validation";
import { router } from "@/router";

export default {
  name: "RoundImage",
  props: ['user'],
  methods: {
    async redirectToProfile() {
      if (isBusiness()) {
        await router.push('/business/profile')
      } else {
        await router.push('/profile')
      }
    }
  }
}
</script>

<style scoped>

</style>