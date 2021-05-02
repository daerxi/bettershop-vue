<template>
  <div class="flex flex-wrap p-12 sm:p-0">
    <div class="w-full">
      <ul class="flex grid grid-cols-10 xl:grid-cols-10 lg:grid-cols-10 md:grid-cols-5 sm:grid-cols-2 gap-4">
        <li v-for="(category, i) in categories" :key="i" class="-mb-px mr-2 last:mr-0 flex-auto text-center"
            v-on:click="toggleTabs(i, category.type)">
          <a
              class="text-xs font-bold uppercase px-1 py-3 shadow-lg rounded block leading-normal"
              v-bind:class="{'text-blueGray-600 bg-gray-100': openTab === i, 'text-white bg-gray-600': openTab !== i}">
            {{ category.type }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import CategoriesService from "@/api/CategoriesService";
import { router } from "@/router";

export default {
  name: "Categories",
  props: ['fn'],
  data() {
    return {
      categories: [],
      openTab: parseInt(localStorage.getItem("open-tab")),
      businesses: []
    }
  },
  async created() {
    this.categories = await CategoriesService.getCategories()
  },
  methods: {
    async toggleTabs(tabNumber, type) {
      if (this.openTab !== tabNumber) {
        this.openTab = tabNumber
      } else {
        this.openTab = -1
      }
      localStorage.setItem("open-tab", tabNumber)
      await this.getCategoriesByType(type)
    },
    async getCategoriesByType(type) {
      let query
      if (type) query = "/categories?type=" + type
      else query = "/"
      await router.push(query).then(async () => this.fn()).catch(e => console.warn(e))
    }
  }
}
</script>

<style scoped>

</style>