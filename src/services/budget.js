import { request, api } from '@net'

export function setIncomeBudget(data) {
  return request({
    method: 'get',
    url: api.budgetIncome,
  })
}
