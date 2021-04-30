<template>
  <button :redirect="redirect" class="bg-transparent border-none w-20 h-20">
    <img :src="user.avatar"
         class="inline object-cover border-none w-16 h-16 mr-2 rounded-full" alt="user profile"/>
  </button>
</template>

<script>
import { emptyAvatar } from "@/utils/validation";
import { router } from "@/router";

export default {
  name: "RoundImage",
  props: ['user'],
  data() {
    return {
      business: {},
      redirect: "/"
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