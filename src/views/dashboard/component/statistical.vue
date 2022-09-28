<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>工单统计<date /></span>
    </div>
    <div v-for="o in 4" :key="o" class="text item">
      {{ '列表内容 ' + o }}
    </div>
  </el-card>
</template>

<script>
import date from './date.vue'
import { workOrderStatisticsApi } from '@/api'
export default {
  components: {
    date
  },
  data() {
    return {
      obj: {
        userId: '1',
        start: '2020-10-01 00:00:00',
        end: '2020-10-31 00:00:00'
      }
    }
  },
  created() {
    this.workOrderStatistics()
  },
  methods: {
    async workOrderStatistics() {
      try {
        const res = await workOrderStatisticsApi(this.obj)
        console.log(res)
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style>

</style>
