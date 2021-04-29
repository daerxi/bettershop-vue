<template>
  <div>
    <tab-component class="px-12" :options="categories" :click="onClick"></tab-component>
  </div>
</template>

<script>
import CategoriesService from "@/api/CategoriesService";
import TabComponent from "@/components/Tab";

export default {
  name: "Categories",
  components: {TabComponent},
  data() {
    return {
      categories: []
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
    async onClick() {
      //
    }
  }
}
</script>

<style scoped>

</style>