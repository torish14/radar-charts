<template>
  <section class="container">
    <div class="upload">
      <Upload />
      <div class="radar">
        <!-- ラベルの色の濃さを上位から順に薄くしていく -->
        <radar-chart
          :chart-data="datacollection"
          :options="chartOptions"
          :bind="true"
        />
        <form @submit.prevent="addData">
          <input v-model="dataentry" placeholder="Add a Data">
          <input v-model="datalabel" placeholder="Add a Label">
          <button type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import RadarChart from './RadarChart.js'
import Upload from '~/components/Upload.vue'

export default {
  components: {
    Upload,
    RadarChart
  },
  data () {
    return {
      datacollection: {
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
      chartOptions: {
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
          }
        }
      }
    }
  },
  methods: {
    addData () {
      this.datacollection.labels.push(this.datalabel)
      this.datacollection.datasets.datasets.data.push(this.dataentry)
      this.datalabel = ''
      this.dataentry = ''
    }
  }
}

</script>

<style>
.upload {
  height: 300px;
  width: 300px;
  margin: 20px 20px;
  padding: 20px 20px;
}

.radar {
  height: 300px;
  width: 300px;
}

.button {
  margin: 20px 62px;
}
</style>
