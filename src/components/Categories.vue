<template>
  <div class="flex flex-wrap p-12">
    <div class="w-full">
      <ul class="flex grid xl:grid-cols-10 2xl:grid-cols-10 lg:grid-cols-10 md:grid-cols-5 sm:grid-cols-5 grid-cols-2 gap-4">
        <li v-for="(category, i) in categories" :key="i" class="-mb-px mr-2 last:mr-0 flex-auto text-center"
            v-on:click="toggleTabs(i)">
          <a class="text-xs font-bold uppercase px-5 py-3 shadow-lg rounded block leading-normal"
             v-on:click="getCategoriesByType(category.type)"
             v-bind:class="{'text-blueGray-600 bg-gray-100': openTab === i, 'text-white bg-gray-600': openTab !== i}">
            {{ category.type }}
          </a>
        </li>
      </ul>
    </div>
<!--    <business-list v-if="selected" v-bind:businesses="businesses"-->
<!--                   v-bind:rateValue=4>-->
<!--    </business-list>-->
  </div>
</template>

<script>
import CategoriesService from "@/api/CategoriesService";
import { router } from "@/router";
// import BusinessList from "@/components/BusinessList";
import BusinessService from "@/api/BusinessService";

export default {
  name: "Categories",
  // components: {BusinessList},
  props: ['selected'],
  data() {
    return {
      categories: [],
      openTab: -1,
      businesses: []
    }
  },
  async created() {
    try {
      this.categories = await CategoriesService.getCategories()
      console.log(this.categories)
    } catch (err) {
      //
    }
  },
  methods: {
    async toggleTabs(tabNumber) {
      this.openTab = tabNumber
    },
    async getCategoriesByType(type) {
      await router.push("/categories?type=" + type).then(async () => {
        window.location.reload()
        this.businesses = await BusinessService.getBusinessByType(type)
      })
    }
  }
}
</script>

<style scoped>

</style>