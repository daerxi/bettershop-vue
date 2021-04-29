<template>
  <div
      class="px-12 grid xl:grid-cols-10 2xl:grid-cols-10 lg:grid-cols-10 md:grid-cols-5 sm:grid-cols-5 grid-cols-2 gap-4">
    <div v-for="(category,i) in categories" :key="i">
      <router-link class="no-underline" :to="{ name: 'Home', params: { type: category.type.toLowerCase() }}">
        <div
            class="h-12 rounded-md flex items-center justify-center text-black text-base font-extrabold bg-blue-700 hover:bg-blue-800">
          <a class="text-white no-underline" href="#">{{ category.type }}</a></div>
      </router-link>
    </div>
  </div>
</template>

<script>
import CategoriesService from "@/APIs/CategoriesService";

export default {
  name: "Categories",
  data() {
    return {
      categories: []
    }
  },
  async created() {
    try {
      this.categories = await CategoriesService.getCategories()
    } catch (err) {
      //
    }
  }
}
</script>

<style scoped>

</style>