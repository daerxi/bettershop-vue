<template>
  <button
      type="submit"
      class="w-full text-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
  >{{ title }}</button>
</template>

<script>
export default {
  name: "SubmitButton",
  props: {
    title: String
  }
}
</script>

<style scoped>

</style>