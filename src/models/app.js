import moduleExtend from 'dva-model-extend'
import pathToRegexp from 'path-to-regexp'
import axios from 'axios'
import { model } from '../utils/model'
import { routerRedux } from 'dva/router'
import {
  userInfo,
  login,
  logout,
  signup,
} from '@/services/user'
import {
  create,
} from '@/services/task'
import {
  message,
} from 'antd'

export default moduleExtend(model, {
  namespace: 'app',

  state: {
    user: {},
    checkLogin: false,
    modalTaskCreateVisible: false, // 添加任务弹窗可视状态
  },

  subscriptions: {
    setup({ dispatch, history }) {
      // 监视登录态变更
      axios.interceptors.response.use((response) => {
        // Do something with response data
        return response
      }, function (error) {
        const { response } = error
        const { status } = response
        if (status === 401) {
          dispatch({ type: 'notLogin' })
        }
        // Do something with response error
        return Promise.reject(error)
      })
      dispatch({ type: 'initUser' })
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
    /** 获取用户信息 */
    * initUser (inVal, { select, put, call }) {
      const { success, status, data } = yield call(userInfo)
      if (success) {
        message.success(`欢迎回来，${data.username}`)
        yield put({
          type: 'updateState',
          payload: { user: data },
        })
      } else {
        yield put({ type: 'notLogin' })
      }
    },
    * notLogin (inVal, { select, put }) {
      const { checkLogin } = yield select(({ app }) => app)
      if (!checkLogin) {
        // 登录态过期拦截
        message.warn('登录态失效，请重新登录')
        yield put(routerRedux.replace('/login'))
        yield put({
          type: 'updateState',
          payload: { checkLogin: true },
        })
      }
    },
    /** 用户登录 */
    * login ({ netData }, { call, put }) {
      const { success, data } = yield call(login, netData)
      if (success) {
        console.log(data)
        message.success('登录成功')
        yield put({
          type: 'updateState',
          payload: { user: data },
        })
      } else {
        throw new Error(data)
      }
      yield put(routerRedux.push('/'))
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
    /** 注册账号 */
    * signup ({ payload }, { call, put }) {
      const { success, data } = yield call(signup, payload)
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
    /** 新增任务 */
    * createTask ({ payload }, { call, put }) {
      const { success, data } = yield call(create, payload)
      if (success) {
        message.success('新增成功')
        yield put({ type: 'showTaskCreate', show: false })
      } else {
        throw new Error(data)
      }
    },
  },

  reducers: {},
})
