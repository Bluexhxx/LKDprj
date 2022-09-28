<template>
  <div class="dashboard-container">

    <el-row :gutter="20">
      <el-col :span="18">

        <el-row :gutter="20">
          <el-col :span="14">
            <div class="grid-content bg-purple">
              <!-- 工单统计卡片 -->
              <statistical />
            </div>
          </el-col>
          <el-col :span="10"><div class="grid-content bg-purple"> <!-- 销售统计卡片 -->
            <statistical /></div></el-col>
        </el-row>
        <el-row
          :span="24"
        ><div
          class="grid-content bg-purple"
        ><SalesData /></div></el-row>

      </el-col>
      <el-col :span="6"><div class="grid-content bg-purple"><ShopList /></div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="14"><div class="grid-content bg-purple"><Partners /></div></el-col>
      <el-col :span="10"><div class="grid-content bg-purple"><DeviceError /></div></el-col>
    </el-row>
  </div>
</template>

<script>
import { workOrderStatisticsApi } from '@/api'
import statistical from './component/statistical.vue'
import ShopList from './component/ShopList.vue'
import SalesData from './component/SalesData.vue'
import Partners from './component/Partners.vue'
import DeviceError from './component/DeviceError.vue'
export default {
  name: 'Dashboard',
  components: {
    statistical, ShopList, SalesData, Partners, DeviceError
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

<style lang="scss" scoped>

.up{
  .el-row{
    background-color: blue;
    height: 540px;
  }
}
.el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 20px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 15px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
.dashboard {
  &-container {
    margin: 30px;
  }
}
</style>
