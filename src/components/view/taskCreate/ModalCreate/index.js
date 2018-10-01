import {
  Modal,
} from 'antd'
import FormCreate from '../FormCreate'

const ModalCreate = ({
  dispatch,
  visible,
}) => {
  // 方法定义
  const hideModal = () => {
    dispatch({ type: 'app/showTaskCreate', show: false })
  }
  
  // 属性定义
  const propsOfModal = {
    visible,
    title: '添加任务',
    width: '60%',
    onCancel: hideModal,
  }

  return (
    <Modal {...propsOfModal}>
      <FormCreate />
    </Modal>
  )
}

export default ModalCreate
