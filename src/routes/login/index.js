import {
  Card,
} from 'antd'
import { connect } from 'dva'
import { Link } from 'dva/router'
import les from './index.less'
import Form from './form'

const Login = ({
  dispatch,
  app,
}) => {
  // 属性定义
  const propsOfForm = {
    dispatch,
    app,
  }

  return (
    <div className={les.container}>
      <Card
        title="日记 - 登录"
        className={les.card}
      >
        <Form {...propsOfForm} />
        <div>
          <span className={les.signup}><Link to="/signup">注册</Link></span>
          {/* <span className={les.forgetPwd}><Link to="/">忘记密码</Link></span> */}
        </div>
      </Card>
    </div>
  )
}

export default connect(({ app }) => ({ app }))(Login)
