<template>
  <section class="container">
    <div class="radar">
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
  </section>
</template>

<script>
import RadarChart from './RadarChart.js'

export default {
  components: {
    RadarChart
  },
  data () {
    return {
      datacollection: {
        labels: ['a', 'b', 'c', 'd', 'e'], // change labels
        datasets: [
          {
            backgroundColor: 'rgba(255, 204, 0, 0.4)',
            borderColor: 'rgba(255, 204, 0, 1)',
            pointBackgroundColor: 'rgba(255, 204, 0, 1)', 
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff', 
            pointHoverBorderColor: 'rgba(255, 204, 0, 1)', 
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
.radar {
  height: 300px;
  width: 300px;
}

.button {
  margin: 20px 62px;
}
</style>
