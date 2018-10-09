import moduleExtend from 'dva-model-extend'
import pathToRegexp from 'path-to-regexp'
import { model } from '../utils/model'
import { routerRedux } from 'dva/router'
import CO from '@/utils/cookies'
import {
  userInfo,
  login,
  logout,
} from '@/services/user'
import {
  message,
} from 'antd'


export default moduleExtend(model, {
  namespace: 'app',

  state: {
    user: {},
    modalTaskCreateVisible: false, // 添加任务弹窗可视状态
  },

  subscriptions: {
    setup({ dispatch, history }) {
      // 初始化登录态检查
      dispatch({ type: 'initCheckLogin' })
      history.listen(({ pathname }) => {
        const match = pathToRegexp('/:other').exec(pathname)
        // 进入路由，获取数据
        if (pathname === '/' || match) {
          // console.log(match)
        }
        if (pathname === '/') {
          // dispatch({ type: 'getLang' })
        }
      })
    },
  },

  effects: {
    /** 初始化登录检查事件 */
    * initCheckLogin (inVal, { takeEvery, select, put }) {
      console.log('执行了')
      yield takeEvery(
        '@@router/LOCATION_CHANGE',
        function* logger(action) {
          const { location } = yield select(({ routing }) => routing)
          if (location && location.pathname !== '/login') {
            yield put({ type: 'checkLogin' })
          }
        }
      )
    },
    /** 检查登录 */
    * checkLogin (inVal, { select, put, call }) {
      const targetPath = '/login'
      const { success, data } = yield call(userInfo)
      if (success) {
        message.success(`欢迎回来，${data.username}`)
      } else {
        message.warn(`登录信息失效: ${data}`)
        yield put(routerRedux.push(targetPath))
      }
    },
    /** 用户登录 */
    * login ({ netData }, { call, put }) {
      const { success, data } = yield call(login, netData)
      if (success) {
        console.log(data)
        message.success('登录成功')
        yield put(routerRedux.push('/'))
      } else {
        throw new Error(data)
      }
    },
    /** 退出登录 */
    * logout (inVal, { call, put }) {
      const { success, data } = yield call(logout)
      if (success) {
        message.success(data)
        yield put(routerRedux.push('/login'))
      } else {
        throw new Error(data)
      }
    },
    /** 显示隐藏登录弹窗 */
    * showTaskCreate ({ show }, { put }) {
      yield put({
        type: 'updateState',
        payload: { modalTaskCreateVisible: show },
      })
    },
  },

  reducers: {},
})
