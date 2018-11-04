import service from '../util/service'

export function getProductList() {
    return service.post('/everyday/listAllDetail').then(data => (data.list))
}