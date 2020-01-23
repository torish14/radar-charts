import { Radar, mixins } from 'vue-chartjs'

const { reactiveProp } = mixins

export default {
  name: 'RadarChart',
  extends: Radar,
  mixins: [reactiveProp],
  props: {
//     chartData: {
//       type: Object,
//       default: null
//     },
    options: {
      type: Object,
      default: null
    }
  },
  mounted () {
    this.renderChart(this.chartData, this.options)
  }
}
