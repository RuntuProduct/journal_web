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
      // 初始化数据更新监听
      dispatch({ type: 'initWatch' })
      history.listen(({ pathname }) => {
        // 进入路由，获取数据
        if (pathname === '/') {
          dispatch({ type: 'getList' })
        }
      })
    },
  },

  effects: {
    /** 初始化数据更新监听 */
    * initWatch (inVal, { takeEvery, put }) {
      // console.log(this)
      yield takeEvery(['app/createTask/@@end'], function* () {
        yield put({ type: 'getList' })
      })
      // console.log(ifGe)
    },
    /** 获取列表 */
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