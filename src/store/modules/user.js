// import { loginAPI } from '@/api/login'

import { loginApi } from '@/api'

export default {
  namespaced: true,
  state: {
    token: null
  },
  mutations: {
    SET_TOKEN(state, playload) {
      state.token = playload
    }
  },
  actions: {
    async loginAction({ commit }, loginData) {
      // 请求
      try {
        const { data } = await loginApi(loginData)
        console.log(data)
        // 提交mutions
        commit('SET_TOKEN', data.token)
      } catch (e) {
        if (e.response && e.response.msg) {
          alert(e.response.msg)
        } else {
          console.log(e.msg)
        }
      }
    }
  }
}
