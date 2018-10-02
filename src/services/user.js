import { request, api } from '@net'

const { user } = api

export function list () {
  return request({
    method: 'get',
    url: user,
  })
}

export function login (data) {
  return request({
    method: 'post',
    url: user,
    data,
  })
}

export function userInfo (data) {
  return request({
    method: 'get',
    url: user,
    data,
  })
}
