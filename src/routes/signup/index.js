import {
  Card,
} from 'antd';
import { connect } from 'dva'
import les from './index.less'
import Form from './form'

const Signup = ({
  dispatch,
  app,
}) => {
  // props definition
  const propsOfForm = {
    dispatch,
    app,
  }

  return (
    <div className={les.container}>
      <Card
        title="日记 - 注册"
        className={les.card}
      >
        <Form {...propsOfForm} />
      </Card>
    </div>
  )
}

export default connect(({ app }) => ({ app }))(Signup)