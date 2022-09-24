import axios from 'axios'
// 创建了一个新的axios实例
const request = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000 // 超时时间
})

// 导出一个axios的实例  而且这个实例要有请求拦截器 响应拦截器
request.interceptors.request.use() // 请求拦截器
request.interceptors.response.use() // 响应拦截器
export default request // 导出axios实例
