<template>
  <div class="container px-16 py-12">
    <input
        class="w-7/12 h-12 px-3 rounded focus:outline-none focus:shadow-outline text-base shadow-lg placeholder-gray-500"
        type="search" placeholder="Search...">
  </div>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      categories: []
    }
  },
  async created() {
    // get categories

    // To /categoryType
    // get items by category
  }
}
</script>

<style scoped>

</style>