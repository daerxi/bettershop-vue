<script>
import { Bar } from 'vue-chartjs'

export default {
  name: "BarChart",
  extends: Bar,
  props: ['chartData', 'fn'],
  data() {
    return {
      options: {
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  async mounted() {
    this.fn()
    this.renderChart(this.chartData, this.options)
  }
}
</script>

<style scoped>

</style>