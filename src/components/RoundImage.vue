<template>
  <router-link v-bind:to="redirectLink">
    <img v-bind:src="photo"
         class="inline object-cover border-none w-16 h-16 mr-2 rounded-full"/>
  </router-link>
</template>

<script>
export default {
  name: "RoundImage",
  props: ['photo', 'redirectLink']
}
</script>

<style scoped>

</style>