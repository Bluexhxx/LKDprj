<template>
  <div>
    <div class="header">
      <Title title="工单统计"></Title>
      <Date></Date>
    </div>
    <div class="list">
      <ul>
        <li>
          <h4>149</h4>
          <span>工单总数</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Title from './title.vue'
import Date from './date.vue'
export default {
  components: { Title, Date }
}
</script>

<style scoped lang="scss">
.header {
  display: flex;
  align-items: center;
}
.list {
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin-top: 22px;
  ul {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    li {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex: 1;
    }
  }
}
h4 {
  font-size: 36px;
  margin-bottom: 5px;
  font-family: PingFangSC-Semibold, PingFang SC;
}
span {
  font-size: 12px;
}
</style>
