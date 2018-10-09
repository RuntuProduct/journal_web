import { request, api } from '@net'

export function list () {
  return request({
    method: 'get',
    url: api.user,
  })
}

export function login (data) {
  return request({
    method: 'post',
    url: api.login,
    data,
  })
}

export function logout() {
  return request({
    method: 'post',
    url: api.logout,
  })
}

export function userInfo () {
  return request({
    method: 'get',
    url: api.user,
  })
}
