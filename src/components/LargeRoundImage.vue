<template>
  <router-link :to="redirect" class="bg-transparent border-none p-2">
    <img v-if="user.id" :src="user.avatar || avatar" class="inline border-none mr-2 rounded-full w-16 h-16" alt=""/>
  </router-link>
</template>

<script>
import { emptyAvatar } from "@/utils/validation";

export default {
  name: "LargeRoundImage",
  props: ['user', 'redirect'],
  data() {
    return {
      avatar: emptyAvatar
    }
  }
}
</script>

<style scoped>

</style>