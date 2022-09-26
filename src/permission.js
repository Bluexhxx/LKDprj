// 权限允许
import store from './store'
import router from './router'

const whiteList = ['/login', '/404']
// 定义路由前置守卫
router.beforeEach((to, from, next) => {
//   console.log(store.getters.token)
  if (store.getters.token) {
    // 已登录
    if (to.path === '/login') {
      next('/')
    } else {
      next()
    }
  } else {
    // 未登录
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})
