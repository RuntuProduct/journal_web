import moduleExtend from 'dva-model-extend'
import { model } from '../utils/model'
import {
  userInfo,
} from '@/services/user'

export default moduleExtend(model, {
  namespace: 'index',

  state: {
    // 
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
    * getList (inVal, { call }) {
      yield call(userInfo)
    }
  }
})