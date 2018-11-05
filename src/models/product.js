import * as service from '../services/product'
import { notification } from 'antd'

export default {
    namespace: 'product',

    state: {
        list: [],
        detail: {},
        dividendList: []
    },

    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
            return history.listen(({ pathname }) => {
                if (pathname === '/') {
                    dispatch({ type: 'getList' })
                } else {
                    const match = /^\/product\/(.*)$/.exec(pathname)
                    if (match && match[1]) {
                        dispatch({
                            type: 'getDividendList',
                            payload: {
                                fpid: match[1]
                            }
                        })
                        dispatch({
                            type: 'getDetail',
                            payload: {
                                fpid: match[1]
                            }
                        })
                    }
                }

            })
        },
    },

    effects: {
        *getList({ payload }, { call, put, select }) {
            let list = yield call(service.getProductList)
            yield put({
                type: "updateList",
                payload: list
            })
        },
        *getDetail({ payload }, { call, put, select }) {
            let list = yield call(service.getProductDetail, payload.fpid)
            yield put({
                type: "updateDetail",
                payload: list
            })
        },
        *buyProduct({ payload }, { call, put, select }) {
            const uid = yield select(state => (state.user.currUid))
            const fpid = yield select(state => (state.product.detail.fpid))


            let data = yield call(service.buyProduct, uid, fpid, payload.buyMoney)
            if (data) {
                notification.info({
                    message: `购买成功`
                })
            }


        },
        *getDividendList({ payload }, { call, put, select }) {
            let list = yield call(service.getDividendList, payload.fpid)
            yield put({
                type: "updateDividendList",
                payload: list
            })
        }
    },

    reducers: {
        // 更新表格
        updateList(state, { payload }) {
            // 判断是不是数组
            if (payload && payload.join) {
                payload = payload.map(item => ({
                    ...item,
                    key: item.fpid
                }))
                return {
                    ...state,
                    list: payload
                };
            }
            return state;

        },
        // 更新表格
        updateDividendList(state, { payload }) {
            // 判断是不是数组
            if (payload && payload.join) {
                return {
                    ...state,
                    dividendList: payload
                };
            }
            return state;

        },
        // 更新细节
        updateDetail(state, { payload }) {
            if (payload) {
                return {
                    ...state,
                    detail: payload
                };
            }
            return state;
        }
    }
}