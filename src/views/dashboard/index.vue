<template>
  <div class="dashboard-container">
    <!-- <template class="up">
      <el-row :gutter="10">
        <el-col :span="18">
          <el-row :gutter="10"> <el-col>
            <el-col :span="13">
              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span>工单统计</span>
                </div>
              </el-card>
            </el-col>
            <el-col :span="11">
              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span>销售统计</span>
                </div>
              </el-card>
            </el-col>
          </el-col></el-row>

          <el-row :gutter="20">
            <el-col :span="24">
              <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span>销售数据</span>
                </div>
              </el-card>
            </el-col>
          </el-row>
        </el-col>

        <el-col :span="6">
          <el-col :span="24">
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>商品热榜</span>
              </div>
            </el-card>
          </el-col>
        </el-col>
      </el-row>

    <!- <el-row :gutter="20">
        <el-col :span="14"> <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>合作商点位数Top5</span>
          </div>
        </el-card></el-col>
        <el-col :span="10"> <el-card class="box-card">
          <div slot="header" class="clearfix">
            <span>异常设备监控</span>
          </div>
        </el-card></el-col>
      </el-row>
    </template> -->

    <el-row :gutter="20">
      <el-col :span="18">

        <el-row :gutter="20">
          <el-col :span="14">
            <div class="grid-content bg-purple">
              <!-- <el-card class="box-card">
                <div slot="header" class="clearfix">
                  <span>工单统计<date /></span>
                </div>
                <div v-for="o in 4" :key="o" class="text item">
                  {{ '列表内容 ' + o }}
                </div>
              </el-card> -->
              <statistical />
            </div>
          </el-col>
          <el-col :span="10"><div class="grid-content bg-purple" /></el-col>
        </el-row>
        <el-row :span="24"><div class="grid-content bg-purple" /></el-row>

      </el-col>
      <el-col :span="6"><div class="grid-content bg-purple" /></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="16"><div class="grid-content bg-purple" /></el-col>
      <el-col :span="8"><div class="grid-content bg-purple" /></el-col>
    </el-row>
  </div>
</template>

<script>

import statistical from './component/statistical.vue'
// import title from './component/title.vue'
export default {
  name: 'Dashboard',
  components: {
    statistical
  },
  data() {
    return {

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
    border-radius: 4px;
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
    border-radius: 4px;
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
