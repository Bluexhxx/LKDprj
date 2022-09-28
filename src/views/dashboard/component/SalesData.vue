<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span><CardTitle :title="title" /><date /></span>
    </div>
    <div id="myCharts1" ref="myCharts1" style="height: 278px;width: 433px;" />
    <div id="myCharts2" ref="myCharts2" style="height: 278px;width: 433px;" />
  </el-card>
</template>

<script>
import date from './date.vue'
import CardTitle from './CardTitle.vue'

export default {
  components: {
    date, CardTitle
  },
  data() {
    return {
      title: '销售热榜'
    }
  },
  mounted() {
    this.drawChart()
    this.drawChart2()
  },
  methods: {
    drawChart() {
    // 1.先初始化
      const myCharts = this.$echarts.init(this.$refs.myCharts1)
      // 2.绘制图表
      const option = {
        title: {
          text: '销售额趋势图',
          left: 'center'
        },
        xAxis: {
          type: 'category',
          data: ['星期一', '星期二', '星期三']
        },
        yAxis: [
          {
            name: '单位：元',
            type: 'value'
          }
        ],
        series: [
          {
            data: [1000, 2000, 3000, 4000, 5000, 6000],
            type: 'line'
          }
        ] }
      // 3
      myCharts.setOption(option)
    },
    drawChart2() {
    // 1.先初始化
      const myCharts = this.$echarts.init(this.$refs.myCharts2)
      // 2.绘制图表
      const option = {
        title: {
          show: true,
          text: '销售额分布',
          left: 'center'
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue']
        },
        yAxis: {
          type: 'category',
          name: '单位：元'
        },
        series: [
          {
            data: [3020, 2000],
            type: 'bar'
          }
        ]
      }
      // 3
      myCharts.setOption(option)
    }
  }
}
</script>

<style lang="scss" scoped>
  ::v-deep .el-card__body {
  display: flex;
    flex-direction: row;
    align-content: space-between;
    justify-content: space-around;
  }

</style>
