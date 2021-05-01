<template>
  <router-link :to="redirect" class="bg-transparent border-none">
    <img v-if="user.avatar" :src=user.avatar
         class="inline border-none w-16 h-16 mr-2 rounded-full" alt="user profile"/>
    <img v-else :src="emptyAvatar"
         class="inline border-none w-16 h-16 mr-2 rounded-full" alt="user profile"/>
  </router-link>
</template>

<script>
import { emptyAvatar } from "@/utils/validation";
import { router } from "@/router";

export default {
  name: "RoundImage",
  props: ['user', 'redirect'],
  data() {
    return {
      business: {},
      emptyAvatar: emptyAvatar
    }
  },
  methods: {
    async toProfile() {
      await router.push(this.redirect)
    }
  }
}
</script>

<style scoped>

</style>