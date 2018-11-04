import { getAssets, saleAssets } from '../services/assets';

export default {
  namespace: 'assets',

  state: {
    list: [],
  },

  effects: {
    /**
     * 获取资产列表
     */
    *fetch(action, { call, put, select }) {
      const params ={uid: "882931e7-b1b5-41a0-abd3-5ea88f5d21d6"};
      const content = yield call(getAssets, params);
      yield put({
        type: 'save',
        payload: content,
      });
    },

    /**
     * 资产出售
     */
    *sale(action, { call, put, select }) {
      yield call(saleAssets, action.payload);
    }
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