import moduleExtend from 'dva-model-extend'
import { model } from '../utils/model'
import {
  fullList,
} from '@/services/task'

export default moduleExtend(model, {
  namespace: 'index',

  state: {
    dayList: [],
    weekList: [],
    monthList: [],
    yearList: [],
  },

  subscriptions: {
    setup({ dispatch, history }) {
      history.listen(({ pathname }) => {
        // 进入路由，获取数据
        if (pathname === '/') {
          dispatch({ type: 'getList' })
        }
      })
    },
  },

  effects: {
    * getList (inVal, { call, put }) {
      const { success, data } = yield call(fullList)
      if (success) {
        yield put({
          type: 'updateState',
          payload: { ...data },
        })
      } else {
        throw new Error(data)
      }
    }
  }
})