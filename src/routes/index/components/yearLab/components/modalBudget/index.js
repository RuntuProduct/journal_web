import {
  Modal,
  Form,
} from 'antd'

class ModalBudget extends React.Component {
  render () {
    // props collect
    const {
      form,
      dispatch,
      visible,
    } = this.props

    // props definition
    const propsOfModal = {
      visible,
      title: '预算编辑',
      onCancel: () => {
        dispatch({ type: 'index/showModalBudget', show: false })
      },
    }
    return (
      <Modal {...propsOfModal}>
        aaa
      </Modal>
    )
  }
}

export default Form.create()(ModalBudget)
