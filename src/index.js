import './polyfill'
import dva from 'dva'

// import createHistory from 'history/createHashHistory'
// user BrowserHistory
import createHistory from 'history/createBrowserHistory'
import createLoading from 'dva-loading'
import 'moment/locale/zh-cn'
// import './rollbar'

// 全局变量注入
// window.qDB = qDB

const basePath = PUBLIC_PATH
// import './index.less'
// 1. Initialize
const app = dva({
  history: createHistory({
    basename: basePath,
  }),
})

// 2. Plugins
app.use(createLoading())

// 3. Register global model
app.model(require('./models/app').default)
// app.model(require('./models/maps').default)
// app.model(require('./models/quest').default)

// 4. Router
app.router(require('./router').default())

// 5. Start
app.start('#root')

// export default app // eslint-disable-line
