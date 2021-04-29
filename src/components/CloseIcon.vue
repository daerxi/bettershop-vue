<template>
  <button
      class="border-none absolute bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
      v-on:click="close">
    <span class="text-white">×</span>
  </button>
</template>

<script>
export default {
  name: "CloseIcon",
  props: ['close']
}
</script>

<style scoped>

</style>