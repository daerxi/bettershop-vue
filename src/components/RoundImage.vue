<template>
  <button class="bg-transparent border-none w-20 h-20">
    <img :src="user.avatar"
         class="inline object-cover border-none w-16 h-16 mr-2 rounded-full"/>
  </button>
</template>

<script>
export default {
  name: "RoundImage",
  props: ['user']
}
</script>

<style scoped>

</style>