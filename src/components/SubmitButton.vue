<template>
  <button
      v-on:click="fn"
      type="submit"
      class="w-full text-center bg-bs-blue hover:bg-bs-light-blue text-white font-bold py-2 px-4 h-12 border-none rounded"
  >{{ title }}
  </button>
</template>

<script>
export default {
  name: "SubmitButton",
  props: {
    title: String,
    fn: Function
  }
}
</script>

<style scoped>

</style>