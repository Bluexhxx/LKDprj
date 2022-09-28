<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span><CardTitle :title="title" /><date /></span>
    </div>
    <div id="mycharts" ref="mycharts" style="width:461px; height:284px" />
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
      title: '合作商点位数Top5'
    }
  },
  methods: {
    drawChart() {
    // 1.先初始化
      const myCharts = this.$echarts.init(this.$refs.myCharts)
      // 2.绘制图表
      const option = {
        legend: {
          top: 'bottom'
        },
        toolbox: {
          show: true,
          feature: {
            mark: { show: true },
            dataView: { show: true, readOnly: false },
            restore: { show: true },
            saveAsImage: { show: true }
          }
        },
        series: [
          {
            name: 'Nightingale Chart',
            type: 'pie',
            radius: [50, 250],
            center: ['50%', '50%'],
            roseType: 'area',
            itemStyle: {
              borderRadius: 8
            },
            data: [
              { value: 40, name: 'rose 1' },
              { value: 38, name: 'rose 2' },
              { value: 32, name: 'rose 3' },
              { value: 30, name: 'rose 4' },
              { value: 28, name: 'rose 5' },
              { value: 26, name: 'rose 6' },
              { value: 22, name: 'rose 7' },
              { value: 18, name: 'rose 8' }
            ]
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
