<template>
  <div>
    <tab-component class="px-12" :options="categories"></tab-component>
  </div>
</template>

<script>
import CategoriesService from "@/api/CategoriesService";
import TabComponent from "@/components/Tab";
import { router } from "@/router";
import BusinessService from "@/api/BusinessService";

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
  }
}
</script>

<style scoped>

</style>