<template>
  <section class="app-main">
    <router-view :key="key" />
  </section>
</template>

<script>
export default {
  name: 'AppMain',
  computed: {
    key() {
      return this.$route.path
    }
  }
}
</script>

<style scoped>
.app-main {
  /*60 = navbar  */
  min-height: calc(100vh - 60px);
  width: calc(100vw - 186px);
  margin-top: 60px;
  margin-left: 168px;
  background-color: skyblue;
  position: relative;
  overflow: auto;
}
.fixed-header+.app-main {
  padding-top: 60px;
}
</style>

<style lang="scss">
// fix css style bug in open el-dialog
.el-popup-parent--hidden {
  .fixed-header {
    padding-right: 15px;
  }
}
</style>
