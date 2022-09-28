<template class="shoplist">
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span><CardTitle :title="title" /><date /></span>
    </div>
    <div v-for="o in 10" :key="o" class="text item">
      <span class="diy-index"> {{ o }}</span>{{ '列表内容 ' + o }}<span> {{ o+ '单 ' }}</span>
    </div>
  </el-card>
</template>

<script>
import date from './date.vue'
import CardTitle from './CardTitle.vue'
export default {
  name: 'ShopList',
  components: {
    date, CardTitle
  },
  data() {
    return {
      title: '商品热榜'
    }
  }
}
</script>

<style lang="scss" scoped>

  ::v-deep .el-card__body {
  display: flex;
    flex-direction: column;
    align-content: space-around;
    align-items: center;
    line-height: 20px;

    .text{
      margin: 10px;
      padding: 0 10px;
    }
  }

</style>
