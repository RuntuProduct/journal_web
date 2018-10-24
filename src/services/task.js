import { request, api } from '@net'

export function create (data) {
  return request({
    method: 'post',
    url: api.task,
    data,
  })
}

export function fullList () {
  return request({
    method: 'get',
    url: api.task,
  })
}

export function complete (data) {
  return request({
    method: 'post',
    url: api.taskComplete,
    data,
  })
}
