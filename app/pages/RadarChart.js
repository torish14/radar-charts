// RadarChart を import して extends することで、異なるデータのチャートを表示する際に柔軟性が向上する。
// プロパティを使用してコンポーネント内のデータに渡したり、コンポーネント内に直接データを記述することができる。
// ただし、直接コンポーネント内にデータを記述した場合は再利用できない。

// 以下でチャートインスタンスを作成する。

import { Radar, mixins } from 'vue-chartjs'
// Chart.js 自身では、データセットを変更した場合に、ライブアップデートの機能を提供していないため、reactiveProp を使用する。
const { reactiveProp } = mixins

export default {
  name: 'RadarChart',
  extends: Radar,
  mixins: [reactiveProp],
  // 再利用可能なチャートコンポーネントを作成するために、チャートデータとオプションを prop として渡す必要がある。
  props: {
    chartData: {
      type: Object,
      default: null
    },
    options: {
      type: Object,
      default: null
    }
  },
  mounted () {
    // this.renderChart() は、2つのパラメータを受け付けている。
    // ひとつは、表示するデータで二番目は、オプションを格納するオブジェクトである。
    this.renderChart(this.chartData, this.options)
  }
}
