<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span><CardTitle :title="title" /><date /></span>
    </div>
    <el-row style="height:280px">
      <img src="@/assets/common/empty.png" class="image" style="width:123px;height:96px">
      <p>暂无数据</p>
    </el-row>
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
      title: '异常设备监控'
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
