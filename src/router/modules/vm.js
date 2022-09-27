import Layout from '@/layout'

export default {
  // 路由规则
  path: '/vm',
  name: 'vm',
  component: Layout, // 静态路由和动态路由区分开
  children: [{
    path: '', // 当这里的二级路由的path什么都不写的时候，表示该路由为当前二级路由的默认路由
    component: () => import('@/views/vm'),
    meta: { title: '设备管理', icon: 'el-icon-mobile' } // 元信息 可以存储一些数据
  }]
}
