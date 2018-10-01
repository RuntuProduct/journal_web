import {
  Form,
  Switch,
  Input,
  Select,
  Radio,
} from 'antd'

const FormItem = Form.Item
const Option = Select.Option
const RadioGroup = Radio.Group
const RadioButton = Radio.Button
const TextArea = Input.TextArea

class FormCreate extends React.Component {
  render () {
    // 获取属性
    const {
      form,
    } = this.props
    const {
      getFieldDecorator,
    } = form

    // 属性定义
    const formItemLayout = {
      labelCol: { span: 6 },
      wrapperCol: { span: 14 },
    }

    return (
      <Form>
        <FormItem
          {...formItemLayout}
          label="任务周期"
        >
          {getFieldDecorator('cType', {
            initialValue: 'none',
          })(
            <RadioGroup>
              <RadioButton value="year">年度</RadioButton>
              <RadioButton value="month">月度</RadioButton>
              <RadioButton value="week">周度</RadioButton>
              <RadioButton value="day">日度</RadioButton>
              <RadioButton value="none">无（当日）</RadioButton>
            </RadioGroup>
          )}
        </FormItem>
        <FormItem
          {...formItemLayout}
          label="标题"
        >
          {getFieldDecorator('title', {
            initialValue: '',
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
          })(
            <TextArea placeholder="待办描述" />
          )}
        </FormItem>
      </Form>
    )
  }
}

export default Form.create()(FormCreate)
