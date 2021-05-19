<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  props: ['chartData', 'fn'],
  mounted() {
    this.fn()
    this.renderChart(
        this.chartData,
        {
          responsive: true,
          maintainAspectRatio: false,
          title: {
            display: true,
            text: "My Data"
          }
        }
    );
  }
};
</script>