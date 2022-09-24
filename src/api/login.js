import request from '@/utils/request'

export const imageVerificationCodeApi = (clientToken) => {
  return request({
    url: `/user-service/user/imageCode/${clientToken}`,
    responseType: 'blob'
  })
}
