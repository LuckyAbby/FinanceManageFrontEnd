import service from '../util/service'

export function getProductList() {
    return service.post('/product/everyday/listAllDetail').then(data => (data.list))
}

export function getProductDetail(fpid) {
    return service.post('/product/everyday/detail', {
        fpid
    }).then(data => (data))
}


export function getDividendList(fpid) {
    return service.post('/product/everyday/listOneWeekRate', {
        fpid
    }).then(data => (data.list))
}