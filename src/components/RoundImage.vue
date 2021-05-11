<template>
  <router-link :to="redirect" class="bg-transparent border-none p-2">
    <img v-if="avatar !== null" :src=avatar
         class="inline border-none mr-2 rounded-full" :class="{'w-12 h-12': isNav, 'w-16 h-16': !isNav}" alt=""/>
    <img v-else :src="emptyAvatar"
         class="inline border-none mr-2 rounded-full" :class="{'w-12 h-12': isNav, 'w-16 h-16': !isNav}" alt=""/>
  </router-link>
</template>

<script>
import { emptyAvatar } from "@/utils/validation";

export default {
  name: "RoundImage",
  props: ['user', 'redirect', 'isNav'],
  data() {
    return {
      emptyAvatar: emptyAvatar,
      avatar: null
    }
  },
  async created() {
    if (this.user.avatar) {
      this.avatar = this.user.avatar
      console.log("avatar", this.avatar)
    }
  }
}
</script>

<style scoped>

</style>