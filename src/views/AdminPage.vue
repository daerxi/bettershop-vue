<template>
  <div>
    <div class="px-24">
      <dropdown-component :fn="onDataChange" v-model="selectedData" :options="dataOption"
                          placeholder="Select type of data"/>
    </div>
    <div class="py-4"/>
    <div class="px-24">
      <dropdown-component v-model="selectedChart" :options="chartOption" placeholder="Select type of chart"/>
    </div>
    <div class="p-10"></div>
    <div v-if="chartData.labels[0]">
      <bar-chart v-if="selectedChart === 'Bar'" :chart-data="chartData" :fn="barStyle"></bar-chart>
      <pie-chart v-if="selectedChart === 'Pie'" :chart-data="chartData" :fn="barStyle"></pie-chart>
      <doughnut-chart v-if="selectedChart === 'Doughnut'" :chart-data="chartData" :fn="barStyle"></doughnut-chart>
      <polar-area-chart v-if="selectedChart === 'Polar Area'" :chart-data="chartData" :fn="barStyle"></polar-area-chart>
      <line-chart v-if="selectedChart === 'Line'" :chart-data="chartData" :fn="lineStyle"></line-chart>
    </div>
  </div>
</template>

<script>

import BarChart from "@/components/BarChart";
import LineChart from "@/components/LineChart";
import CategoriesService from "@/api/CategoriesService";
import PieChart from "@/components/PieChart";
import DoughnutChart from "@/components/DoughnutChart";
import PolarAreaChart from "@/components/PolarAreaChart";
import DropdownComponent from "@/components/Dropdown";

export default {
  name: "AdminPage",
  components: {DropdownComponent, PolarAreaChart, DoughnutChart, PieChart, LineChart, BarChart},
  data() {
    return {
      chartOption: [{type: "Polar Area"}, {type: "Pie"}, {type: "Bar"}, {type: "Doughnut"}, {type: "Line"}],
      dataOption: [{type: "Amount of Businesses per category"}],
      selectedData: null,
      selectedChart: null,
      categories: [],
      businessCount: {},
      chartData: {
        labels: [],
        datasets: [
          {
            label: '',
            data: []
          }
        ]
      }
    }
  },
  methods: {
    async lineStyle() {
      this.chartData.datasets[0].backgroundColor = "#c7d69a"
    },
    async barStyle() {
      this.chartData.datasets[0].backgroundColor = ["#ffc559", "#6082b6", "#98dfed", "#82aaaa", "#69869c",
        "#c7d69a", "#ccbaba", "#c9def2", "#9ad6a1", "#daabdb"]
    },
    async onDataChange() {
      this.chartData.datasets[0].label = this.selectedData
      if (this.selectedData === this.dataOption[0].type) {
        this.chartData.datasets[0].label = this.selectedData
        await CategoriesService.getBusiness()
            .then(async res => this.businessCount = res.data)
            .catch(e => console.error(e))
        this.categories = await CategoriesService.getCategories()
        for (const category of this.categories) {
          this.chartData.labels.push(category.type)
          this.chartData.datasets[0].data.push(this.businessCount[category.type])
        }
      }
    }
  }
}
</script>

<style scoped>

</style>