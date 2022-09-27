<template>
  <h3>{{ title }}</h3>
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
h3 {
  font-size: 16px;
  color: #333333;
}
</style>
