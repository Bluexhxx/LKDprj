import request from '@/utils/request'

export const workOrderStatisticsApi = ({ userId, start, end }) => {
  return request({
    url: '/task-service/task/userWork',
    params: {
      userId, start, end
    }
  })
}
