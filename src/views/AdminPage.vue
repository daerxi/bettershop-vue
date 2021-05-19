<template>
  <div>
    <h1 class="py-6 font-semibold text-2xl" id="title">Admin Statistical Analysis System</h1>
    <div class="px-24">
    </div>
    <div class="px-24">
      <dropdown-component :fn="onDataChange" v-model="selectedData" :options="dataOption"
                          placeholder="Select type of data"/>
      <div class="py-4"/>
      <dropdown-component v-model="selectedChart" :options="chartOption" placeholder="Select type of chart"/>
      <div class="py-4"/>
      <button class="bg-gray-200 p-3 w-full rounded text-center hover:bg-gray-300 focus:outline-none"
              @click="exportToPDF">Export to PDF
      </button>
    </div>
    <div class="py-4"/>
    <div v-if="chartData.labels[0]" ref="chart">
      <bar-chart v-if="selectedChart === 'Bar'" :chart-data="chartData" :fn="barStyle"></bar-chart>
      <pie-chart v-if="selectedChart === 'Pie'" :chart-data="chartData" :fn="barStyle"></pie-chart>
      <doughnut-chart v-if="selectedChart === 'Doughnut'" :chart-data="chartData" :fn="barStyle"></doughnut-chart>
      <polar-area-chart v-if="selectedChart === 'Polar Area'" :chart-data="chartData" :fn="barStyle"></polar-area-chart>
      <line-chart v-if="selectedChart === 'Line'" :chart-data="chartData" :fn="lineStyle"></line-chart>
      <div class="p-12"></div>
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
import html2pdf from 'html2pdf.js'

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
    },
    exportToPDF() {
      window.scrollTo(0,0)
      html2pdf(this.$refs.chart, {
        margin: 1,
        filename: `${this.selectedData}_${this.selectedChart}_chart.pdf`,
        image: {type: 'jpeg', quality: 1},
        jsPDF: {unit: 'cm', format: 'letter', orientation: 'landscape'}
      })
    }
  }
}
</script>

<style scoped>

</style>