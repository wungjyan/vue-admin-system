import request from '@/utils/request.js'

export const login = data => {
  return request({
    url: '/user/login',
    method: 'post',
    data
  })
}

// 请求时 headers 上自动带上 token，这里无需传 token
export const getInfo = () => {
  return request({
    url: '/user/info',
    method: 'get'
  })
}

export const logout = () => {
  return request({
    url: '/user/logout',
    method: 'post'
  })
}
