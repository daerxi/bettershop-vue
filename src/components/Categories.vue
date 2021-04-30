<template>
  <div class="flex flex-wrap p-12 sm:p-0">
    <div class="w-full">
      <ul class="flex grid grid-cols-10 md:grid-cols-5 sm:grid-cols-2 gap-4">
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
  props: ['selected'],
  data() {
    return {
      categories: [],
      openTab: parseInt(localStorage.getItem("open-tab")),
      businesses: []
    }
  },
  async created() {
    try {
      if (this.$route.name === 'Home') localStorage.setItem("open-tab", -1)
      this.categories = await CategoriesService.getCategories()
      this.openTab = parseInt(localStorage.getItem("open-tab"))
    } catch (err) {
      //
    }
  },
  methods: {
    async toggleTabs(tabNumber, type) {
      if (this.openTab !== tabNumber) {
        await this.getCategoriesByType(type).then(async () => {
          this.openTab = tabNumber
          localStorage.setItem("open-tab", this.openTab)
        })
      } else {
        await router.push("/")
      }
      window.location.reload()
    },
    async getCategoriesByType(type) {
      await router.push("/categories?type=" + type).then(async () => {
      })
    }
  }
}
</script>

<style scoped>

</style>