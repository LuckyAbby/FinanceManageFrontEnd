import { getDetails } from '../services/details';

export default {
  namespace: 'details',

  state: {
    list: [],
  },

  effects: {
    /**
     * 获取交易详情列表
     */
    *fetch(action, { call, put, select }) {
      const params ={uid: "882931e7-b1b5-41a0-abd3-5ea88f5d21d6"};
      const content = yield call(getDetails, params);
      yield put({
        type: 'save',
        payload: content,
      });
    },
  },

  reducers: {
    save(state, action) {
      return {
        ...state,
        list: action.payload,
      };
    },
  }
}