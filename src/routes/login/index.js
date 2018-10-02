import {
  Card,
} from 'antd'
import { connect } from 'dva'
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
      </Card>
    </div>
  )
}

export default connect(({ app }) => ({ app }))(Login)
