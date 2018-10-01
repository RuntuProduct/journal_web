import les from './index.less'
import { connect } from 'dva'
import {
  Icon,
  Tooltip,
} from 'antd'
import ModalCreate from './ModalCreate'

const TaskCreate = ({
  dispatch,
  app,
}) => {
  // 获取属性
  const {
    modalTaskCreateVisible,
  } = app

  // 方法定义
  const showModal = () => {
    dispatch({ type: 'app/showTaskCreate', show: true })
  }

  // 属性定义
  const propsOfModalCreate = {
    dispatch,
    visible: modalTaskCreateVisible,
  }

  return (
    <div className={les.container}>
      <Tooltip
        title="添加任务"
        placement="left"
      >
        <div className={les.fullBody} onClick={showModal}>
          <Icon type="plus" theme="outlined" />
        </div>
      </Tooltip>
      {/* 添加任务弹窗 */}
      <ModalCreate {...propsOfModalCreate} />
    </div>
  )
}

export default connect(({ app }) => ({ app }))(TaskCreate)
