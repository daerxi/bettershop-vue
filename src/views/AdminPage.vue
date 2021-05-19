<template>
  <div v-if="chartData.labels[0]">
    <line-chart :chart-data="chartData" :fn="lineStyle"></line-chart>
    <bar-chart :chart-data="chartData" :fn="barStyle"></bar-chart>
  </div>
</template>

<script>

import BarChart from "@/components/BarChart";
import LineChart from "@/components/LineChart";
import CategoriesService from "@/api/CategoriesService";

export default {
  name: "AdminPage",
  components: {LineChart, BarChart},
  data() {
    return {
      categories: [],
      businessCount: {},
      chartData: {
        labels: [],
        datasets: [
          {
            label: 'Category',
            data: []
          }
        ]
      }
    }
  },
  async beforeMount() {
    await CategoriesService.getBusiness()
        .then(async res => this.businessCount = res.data)
        .catch(e => console.error(e))
    this.categories = await CategoriesService.getCategories()
    for (const category of this.categories) {
      this.chartData.labels.push(category.type)
      this.chartData.datasets[0].data.push(this.businessCount[category.type])
    }
  },
  methods: {
    async lineStyle() {
      this.chartData.datasets[0].backgroundColor = "#ffa500";
      this.chartData.datasets[0].backgroundColor = "#e6e6fa";
      this.chartData.datasets[0].backgroundColor = "#40e0d0";
    },
    async barStyle() {
      this.chartData.datasets[0].backgroundColor = "#ffa500";
    }
  }
}
</script>

<style scoped>

</style>