import { request, api } from '@net'

export function getToday(params) {
  return request({
    method: 'get',
    url: api.summaryToday,
  })
}