<script>
export default {
  name: 'MenuItem',
  functional: true,
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  render(h, context) {
    const { icon, title } = context.props
    const vnodes = []

    // if (icon) {
    //   if (icon.includes('el-icon')) {
    //     vnodes.push(<i class={[icon, 'sub-el-icon']} />)
    //   } else {
    //     vnodes.push(<svg-icon icon-class={icon}/>)
    //   }
    // }
    if (icon) {
      if (icon.includes('icon')) {
        vnodes.push(<i class={['iconfont', icon]} />)
      } else {
        vnodes.push(<svg-icon icon-class={icon}/>)
      }
    }

    if (title) {
      vnodes.push(<span slot='title'>{(title)}</span>)
    }
    return vnodes
  }
}
</script>

<style scoped>
.sub-el-icon {
  color: black;
  /* color: currentColor; */
  width: 1em;
  height: 1em;
}
.el-menu-item i{
  color: black;
  font-size: 16px;
  margin-right: 20px;
  font-weight: 600;
}
</style>
