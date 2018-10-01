import moduleExtend from 'dva-model-extend'
import pathToRegexp from 'path-to-regexp'
import { model } from '../utils/model'
// import LG from '@/services/localStorage'


export default moduleExtend(model, {
  namespace: 'app',

  state: {
    modalTaskCreateVisible: false, // 添加任务弹窗可视状态
  },

  subscriptions: {
    setup({ dispatch, history }) {
      // 检查语种
      history.listen(({ pathname }) => {
        const match = pathToRegexp('/:lang').exec(pathname)
        // 进入路由，获取数据
        if (match) {
          // console.log(match)
        }
        if (pathname === '/') {
          // dispatch({ type: 'getLang' })
        }
      })
    },
  },

  effects: {
    * showTaskCreate ({ show }, { put }) {
      yield put({
        type: 'updateState',
        payload: { modalTaskCreateVisible: show },
      })
    },
  },

  reducers: {},
})
