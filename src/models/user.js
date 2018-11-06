import { getUserDetail } from '../services/user'

export default {
    namespace: 'user',
    state: {
        currUid: '882931e7-b1b5-41a0-abd3-5ea88f5d21d6',
        detail: {}
    },
    subscriptions: {
        setup({ dispatch, history }) {  // eslint-disable-line
            // TODO 读取缓存中的用户信息
            console.log("setup userinfo");

            return history.listen(({ pathname }) => {
                if (pathname === "/userInfo") {
                    dispatch({ type: "getDetail" })
                }

            })
        }
    },

    effects: {
        *getDetail(_, { call, put, select }) {
            const uid = yield select(state => (state.user.currUid))

            let list = yield call(getUserDetail, uid)
            yield put({
                type: "updateDetail",
                payload: list
            })
        },
    },

    reducers: {
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