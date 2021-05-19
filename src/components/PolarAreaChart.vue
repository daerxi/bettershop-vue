<script>
import { PolarArea } from "vue-chartjs";

export default {
  extends: PolarArea,
  props: ['chartData', 'fn'],
  mounted() {
    this.fn()
    this.renderChart(
        this.chartData,
        {
          responsive: true,
          maintainAspectRatio: false
        }
    );
  }
};
</script>