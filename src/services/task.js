import { request, api } from '@net'

export function create (data) {
  return request({
    method: 'post',
    url: api.task,
    data,
  })
}
