import axios from 'axios'
import lodash from 'lodash'
import pathToRegexp from 'path-to-regexp'
import { message } from 'antd'
import { baseURL } from '../config'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const errCodeGlobal = [
  404,
]

axios.defaults.baseURL = baseURL
axios.defaults.timeout = 1000
// axios.defaults.withCredentials = true

const fetch = (options) => {
  let {
    method = 'get',
    data,
    paramsType,
    url,
    headers,
  } = options

  const cloneData = lodash.cloneDeep(data)

  const defaultHeader = {
    'X-Requested-With': 'XMLHttpRequest',
  }

  // 判断传参格式
  if (paramsType === 'form') {
    Object.assign(defaultHeader, {
      'Content-Type': 'application/x-www-form-urlencoded',
    })
  } else {
    // 默认为json
    Object.assign(defaultHeader, {
      'Content-Type': 'application/json',
    })
  }

  headers = headers || {}

  const useOptions = {
    headers: Object.assign(headers, defaultHeader),
    withCredentials: false,
  }

  try {
    let domin = ''
    if (url.match(/[a-zA-z]+:\/\/[^/]*/)) {
      domin = url.match(/[a-zA-z]+:\/\/[^/]*/)[0]
      url = url.slice(domin.length)
    }
    const match = pathToRegexp.parse(url)
    url = pathToRegexp.compile(url)(data)
    for (const item of match) {
      if (item instanceof Object && item.name in cloneData) {
        delete cloneData[item.name]
      }
    }
    url = domin + url
  } catch (e) {
    message.error(e.message)
  }

  switch (method.toLowerCase()) {
    case 'get':
      return axios.get(url, {
        params: cloneData,
        ...useOptions,
      })
    case 'delete':
      return axios.delete(url, {
        data: cloneData,
        ...useOptions,
      })
    case 'post':
      return axios.post(url, cloneData, { ...useOptions })
    case 'put':
      return axios.put(url, cloneData, { ...useOptions })
    case 'patch':
      return axios.patch(url, cloneData, { ...useOptions })
    default:
      return axios(options)
  }
}

export default function request (options) {
  NProgress.start()
  return fetch(options)
    .then((response) => {
      NProgress.done()
      // console.log(response)
      const { data } = response
      // 获取请求结果
      const { status, data: realData } = data
      if (status === 'success') {
        return {
          success: true,
          status: status,
          data: realData,
        }
      } else {
        return {
          success: false,
          status: status,
          data: realData,
        }
      }
    })
    .catch((error) => {
      NProgress.done()
      const { response } = error
      console.log(response)
      let status
      let data
      if (response) {
        status = response.status
        data = response.data ?
          response.data.data :
          response.statusText
        
        if (errCodeGlobal.indexOf(status) !== -1) {
          message.error(`${status} - ${data}`)
        }
      } else {
        status = 600
        data = 'Network Error'
      }
      return {
        success: false,
        status,
        data,
      }
    })
}
