<!-- 実行力 -->

<script>
import { Radar } from 'vue-chartjs'

export default {
  extends: Radar,
  data () {
    return {
      data: {
        labels: ['1: 信念', '2: 達成欲', '3: 目標志向', '4: 最上志向', '5: 親密性'],
        datasets: [
          {
            backgroundColor: 'rgba(68, 0, 0, 0.4)', // 塗り潰しの色
            borderColor: 'rgba(68, 0, 0, 1)', // 線の色
            pointBackgroundColor: 'rgba(68, 0, 0, 1)', // 点の塗り潰しの色
            pointBorderColor: '#fff', // 点の境界線の色
            pointHoverBackgroundColor: '#fff', // マウスオーバー時の点の背景色
            pointHoverBorderColor: 'rgba(68, 0, 0, 1)', // マウスオーバー時の点の境界線の色
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
