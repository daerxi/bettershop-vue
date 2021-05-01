<template>
  <router-link :to="redirect" class="bg-transparent border-none">
    <img :src="user.avatar"
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
    }
  },
  async created() {
    if (!this.user.avatar) this.user.avatar = emptyAvatar
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