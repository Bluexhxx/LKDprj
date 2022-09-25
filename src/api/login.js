import request from '@/utils/request'
/**
 * 请求图片验证码
 * @param {String} clientToken 随机数
 * @returns Promise
 */
export const imageVerificationCodeApi = (clientToken) => {
  return request({
    url: `/user-service/user/imageCode/${clientToken}`,
    responseType: 'blob'
  })
}
/**
 * 登录请求
 * @param {Object} data 登录表单数据
 * @returns Promise
 */
export const loginApi = (data) => {
  return request({
    url: '/user-service/user/login',
    method: 'POST',
    data
  })
}
