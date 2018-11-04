import * as service from '../services/product'

export default {
    namespace: 'product',

    state: {
        list: [],
        detail: {}
    },

    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
            return history.listen(({ pathname }) => {
                if (pathname === '/') {
                    dispatch({ type: 'getList' })
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
    },

    reducers: {
        // 更新表格
        updateList(state, { payload }) {
            // 判断是不是数组
            if (payload && payload.join) {
                return {
                    ...state,
                    list: payload
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