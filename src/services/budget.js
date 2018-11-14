import { request, api } from '@net'

export function getBudgetCalculation(data) {
  return request({
    method: 'get',
    url: api.budgetCal,
    data,
  })
}
