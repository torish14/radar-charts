<!-- vue-charts -->

<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.3/Chart.js">
</script>
<script src="https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.js">
</script>

<template>
<div id="app">
  <canvas id="chart"></canvas>
  <form>
    <label>
      資質<input type="text" name="" v-model="nameSet" placeholder="">
    </label>
    <label>
      数値<input type="number" name="" v-model="numSet">
    </label>

    <input type="button" value="追加" @click="addChartList()">
  </form>
</div>
</template> -->

<!-- <script>
new Vue({
  el: '#app',
  data: {
    chartLists: [
      { name: '自己確信' },
      { name: '指令性' },
      { name: '競争性' },
      { name: '着想' },
      { name: '戦略性' }
    ],
    btnDisabledFlag: true
  },
  methods: {
    listCategoryCreat: function (target) {
      //グラフを描画するために連想配列を普通の配列に変換
      var targetList = this.chartLists.map(function (arr) {
        return [arr[target]]
      }).reduce(function (a, b) {
        return a.concat(b);
      });

      return targetList;
    },
    creatChart: function () {
      var labelList = this.listCategoryCreat('name');
      var colorList = this.listCategoryCreat('color');
      var dataList = this.listCategoryCreat('data');

      //グラフ描画
      config = {
        type: 'radar',
        data: {
          labels: labelList,
          datasets: [{
            backgroundColor: 'rgba(255, 204, 0, 0.4)',
            borderColor: 'rgba(255, 204, 0, 1)',
            pointBackgroundColor: 'rgba(255, 204, 0, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(255, 204, 0, 1)',
            data: [100, 90, 80, 70, 60],
            fill: true,
            pointHitRadius: 20,
            pointStyle: 'circle',
            pointRadius: 2
          }]
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
      };
      chart = new Chart(document.getElementById('chart').getContext('2d'), config);
    },
    addChartList: function () {
      //forEachの中ではthisの対象が変わるためselfを使う
      var self = this;

      //configの中にinputへ入力して値をpush
      config.data.labels.push(this.nameSet);
      config.data.datasets.forEach(function (dataset) {

        dataset.data.push(self.numSet);
      });

      //Chart.jsに存在するupdate関数を使用
      chart.update();
    }
  },
  mounted: function () {
    //画面読み込み時に実行
    this.creatChart();
  }
});
</script> -->

<!-- <template>
  <div>
    <ul>
      <li v-for="label in chartData.labels" :key="label.id">
        {{ label }}
      </li>
    </ul>
    <br>
    <form>
      <input v-model="text1" placeholder="input me">
      <input v-model="text2" placeholder="input me">
      <input v-model="text3" placeholder="input me">
      <input v-model="text4" placeholder="input me">
      <input v-model="text5" placeholder="input me">
    </form>
    <br>
    <p>{{ text1 }}</p>
    <p>{{ text2 }}</p>
    <p>{{ text3 }}</p>
    <p>{{ text4 }}</p>
    <p>{{ text5 }}</p>
  </div>
</template> -->

<!-- <script>
export const a = '自己確信'
export const b = '指令性'
export const c = '競争性'
export const d = '着想'
export const e = '戦略性'

export default {
  data () {
    return {
      text1: '',
      text2: '',
      text3: '',
      text4: '',
      text5: '',
      chartData: {
        labels: [
          a, b, c, d, e
        ]
      }
    }
  }
}
</script> -->
