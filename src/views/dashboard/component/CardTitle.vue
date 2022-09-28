<template>
  <span>{{ title }}</span>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
span {
  display: inline-block;
  font-size: 16px;
  font-weight: 600;
  color: #333333;
}
</style>
