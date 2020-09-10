import axios from 'axios'
import config from '../../config/config.json'

const env = process.env.VUE_APP_API_ENV
const service = axios.create({
  baseURL: config[env].API_URL,
  // 请求超时时间
  timeout: 5000
})

/**
 * 请求拦截器
 */
service.interceptors.request.use(
  config => {
    // 在发送请求之前做些什么
    return config
  },
  error => {
    // 对请求错误做些什么
    return Promise.reject(error)
  }
)

/**
 * 响应拦截器
 */
service.interceptors.response.use(
  response => {
    // 对响应数据做些什么
    return response
  },
  error => {
    // 对响应错误做些什么
    return Promise.reject(error)
  }
)

export default {
  /* 封装POST方法 */
  post(url, data = {}) {
    // 请求发出前可以进行一些处理
    return service.post(url, data).then(
      res => {
        // 对请求返回值进行一些处理
        return res
      },
      err => {
        return Promise.reject(err)
      }
    )
  },
  /* 封装GET方法 */
  get(url, params) {
    // 请求发出前做一些处理
    return service.get(url, params).then(
      res => {
        return res
      },
      err => {
        return Promise.reject(err)
      }
    )
  }
}
