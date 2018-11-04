import service from '../util/service'

export function getDetails(params) {
  return service.post('/orders/orderByUID', params).then(data => (data))
}
