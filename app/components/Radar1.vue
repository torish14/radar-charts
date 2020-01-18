<!-- 影響力 -->

<script>
import { Radar } from 'vue-chartjs'

export default {
  extends: Radar,
  data () {
    return {
      data: {
        labels: ['1: 自己確信', '2: 指令性', '3: 競争性', '4: 着想', '5: 戦略性'],
        datasets: [
          {
            backgroundColor: 'rgba(255, 204, 0, 0.4)', // 塗り潰しの色
            borderColor: 'rgba(255, 204, 0, 1)', // 線の色
            pointBackgroundColor: 'rgba(255, 204, 0, 1)', // 点の塗り潰しの色
            pointBorderColor: '#fff', // 点の境界線の色
            pointHoverBackgroundColor: '#fff', // マウスオーバー時の点の背景色
            pointHoverBorderColor: 'rgba(255, 204, 0, 1)', // マウスオーバー時の点の境界線の色
            data: [100, 90, 80, 70, 60], // numbers
            fill: true,
            pointHitRadius: 20,
            pointStyle: 'circle',
            pointRadius: 2
          }
        ]
      },
      options: {
        legend: {
          display: false,
          labels: {
            fontSize: 14
          }
        },
        scale: {
          pointLabels: {
            fontSize: 14
          },
          ticks: {
            min: 0,
            max: 100,
            stepSize: 20,
            fontSize: 0
          },
          angleLines: {
            display: true,
            color: 'gray'
          },
          gridLines: {
            display: true,
            color: 'gray'
          }
        }
      }
    }
  },
  mounted () {
    this.renderChart(this.data, this.options)
  },
  methods: {
    addLabel () {
      this.labels.push(this.label)
      this.labels = ''
    }
  }
}
</script>
