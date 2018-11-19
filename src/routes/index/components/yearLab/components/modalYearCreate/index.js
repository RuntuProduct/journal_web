import les from './index.less'
import {
  Modal,
} from 'antd'

const ModalYearCreate = ({
  dispatch,
  loading,
  today,
}) => {
  // props collect
  const {
    yearCreateVisible,
  } = today

  // props difinition
  const porpsOfModal = {
    title: '创建年纪',
    className: les.container,
    visible: yearCreateVisible,
    onCancel: () => {
      dispatch({
        type: 'today/showModalYearCreate',
        show: false,
      })
    },
  }

  return (
    <Modal {...porpsOfModal}>
      弹窗内容
    </Modal>
  )
}

export default ModalYearCreate
