import {
  Modal,
  Form,
  Input,
  Radio,
} from 'antd'

const FormItem = Form.Item
const RadioGroup = Radio.Group
const RadioButton = Radio.Button
const TextArea = Input.TextArea

class ModalCreate extends React.Component {
  render () {
    // 提取属性
    const {
      dispatch,
      visible,
      form,
    } = this.props
    const {
      getFieldDecorator,
    } = form

    // 方法定义
    const hideModal = () => {
      dispatch({ type: 'app/showTaskCreate', show: false })
    }
    const handleSubmit = () => {
      form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
          const now = new Date()
          dispatch({
            type: 'app/createTask',
            payload: { ...values, today: now },
          })
        }
      })
    }
    
    // 属性定义
    const propsOfModal = {
      visible,
      title: '添加任务',
      width: '60%',
      onCancel: hideModal,
      onOk: handleSubmit,
    }
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    }

    return (
      <Modal {...propsOfModal}>
        <Form
          layout="vertical"
        >
          <FormItem
            {...formItemLayout}
            label="任务周期"
          >
            {getFieldDecorator('type', {
              initialValue: 'day',
              rules: [{ required: true, message: '请选择任务周期' }],
            })(
              <RadioGroup>
                <RadioButton value="year">年度</RadioButton>
                <RadioButton value="month">月度</RadioButton>
                <RadioButton value="week">周度</RadioButton>
                <RadioButton value="day">日度</RadioButton>
              </RadioGroup>
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="标题"
          >
            {getFieldDecorator('title', {
              initialValue: '',
              rules: [{ required: true, message: '请输入待办标题' }],
            })(
              <Input placeholder="待办标题" />
            )}
          </FormItem>
          <FormItem
            {...formItemLayout}
            label="待办描述"
          >
            {getFieldDecorator('desc', {
              initialValue: '',
              rules: [{ required: true, message: '请输入待办描述' }],
            })(
              <TextArea placeholder="待办描述" />
            )}
          </FormItem>
        </Form>
      </Modal>
    )
  }
}

export default Form.create()(ModalCreate)
