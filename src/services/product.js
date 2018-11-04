import service from '../util/service'

export function getProductList() {
    return service.post('/everyday/listAllDetail').then(data => (data.list))
}


export function getDividendList(fpid) {
    return service.post('/everyday/listOneWeekRate', {
        fpid
    }).then(data => (data.list))
}