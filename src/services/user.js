import service from '../util/service'

export function getUserDetail(id) {
    return service.post('/user/detail', {
        id
    }).then(data => (data))
}