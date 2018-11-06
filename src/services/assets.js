import service from '../util/service'

export function getAssets(params) {
  return service.post('/user/hold/userholdByUID', params).then(data => (data))
}

export function saleAssets(params) {
  return service.post('/user/hold/saleProduct', params).then(data => (data))
}