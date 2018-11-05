import fetch from 'dva/fetch';
import { notification } from 'antd'
const base = `http://182.254.137.15:8080/finance/`;

function parseJSON(response) {

    return response.json();
}

// 解析返回数据
function parseData(data) {
    if (data.code === 200) {
        return data.data
    }

    notification["error"]({
        message: `${data.code ? data.code : "未知错误"}`,
        description: `${data.message ? data.message : "未知错误"}`
    })
}

function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        return response;
    }

    const error = new Error(response.statusText);
    error.response = response;
    throw error;
}
/**
* Requests a URL, returning a promise.
*
* @param  {string} url       The URL we want to request
* @param  {object} [options] The options we want to pass to "fetch"
* @return {object}           An object containing either "data" or "err"
*/
function request(url, options = {}) {
    // fetch 默认不带 cookie，这里设置 credentials 为 include 来开启带 cookie 选项
    // if (!!PRODUCTION) {
    //     options = Object.assign(options, { credentials: 'include' });
    // }

    url = base + url;

    return fetch(url, options)
        .then(checkStatus)
        .then(parseJSON)
        .then(parseData)
        .then(data => (data))
        .catch(err => {
            notification["error"]({
                message: `${err.response ? err.response.status : "未知错误"}`,
                description: `${url} ${err.response ? err.response.statusText : "未知错误"}`
            })
            return err.response.json();
        });
}

export default {
    request: request,
    get(url, data) {
        if (data) {
            return request(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            })
        } else {
            return request(url)
        }
    },
    post(url, data) {
        return request(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
    },
    put(url, data) {
        return request(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
    },
    delete(url, data) {
        return request(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
    },
}