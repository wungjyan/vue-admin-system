import axios from 'axios'
import { getToken } from '@/utils/token'
import config from '@/config'
const service = axios.create({
  baseURL: config.baseUrl[process.env.NODE_ENV],
  timeout: 5000
})

service.interceptors.request.use(
  config => {
    // 请求头自动带上 token
    config.headers = {
      authorization: 'Bearer ' + getToken()
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    return response
  },
  error => {
    return Promise.reject(error.response)
  }
)

export default service
