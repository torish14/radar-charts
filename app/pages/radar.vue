<template>
  <div>
    <radar-chart :data="data" :options="options" />
  </div>
</template>

<script>

export default {
  data () {
    return {
      labels: ['数学', '英語', '理科', '国語', '社会'],
      options: {
        maintainAspectRatio: false,
        animation: {
          duration: 1000,
          easing: 'easeInOutCubic'
        }
      }
    }
  },
  computed: {
    data () {
      return {
        datasets: [
          {
            label: 'My favorite and weak subjects',
            backgroundColor: 'rgba(0, 150, 255, 0.2)',
            borderColor: 'rgba(0, 150, 255, 1)',
            pointBackgroundColor: 'rgba(0, 150, 255, 1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(0, 150, 255, 1)',
            data: [100, 90, 80, 70, 60]
          }
        ]
      }
    }
  }
}
</script>
