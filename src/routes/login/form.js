import {
  Form,
  Input,
  Icon,
  Button,
} from 'antd'
import les from './index.less'

const FormItem = Form.Item


const hasErrors = (fieldsError) => {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class Login extends React.Component {
  componentDidMount() {
    document.title = '日记 - 登录'
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch } = this.props
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
        dispatch({ type: 'app/login', netData: values })
      }
    })
  }

  render () {
    const {
      form,
    } = this.props
    const {
      getFieldDecorator,
      getFieldsError,
      getFieldError,
      isFieldTouched,
    } = form

    // Only show error after a field is touched.
    const accountError = isFieldTouched('account') && getFieldError('account')
    const passwordError = isFieldTouched('password') && getFieldError('password')

    return (
      <Form
        layout="vertical"
        onSubmit={this.handleSubmit}
      >
        <FormItem
          validateStatus={accountError ? 'error' : ''}
          help={accountError || ''}
        >
          {getFieldDecorator('account', {
            initialValue: 'admin',
            rules: [{ required: true, message: '请输入账号' }],
          })(
            <Input
              prefix={(
                <Icon
                  type="user"
                  style={{ color: 'rgba(0,0,0,.25)' }}
                  />
              )}
              placeholder="账号"
            />
          )}
        </FormItem>
        <FormItem
          validateStatus={passwordError ? 'error' : ''}
          help={passwordError || ''}
        >
          {getFieldDecorator('password', {
            initialValue: '123456',
            rules: [{ required: true, message: '请输入密码' }],
          })(
            <Input
              prefix={(
                <Icon
                  type="lock"
                  style={{ color: 'rgba(0,0,0,.25)' }}
                />
              )}
              type="password"
              placeholder="密码"
            />
          )}
        </FormItem>
        <FormItem>
          <Button
            htmlType="submit"
            className={les.submit}
            disabled={hasErrors(getFieldsError())}
          >
            登录
          </Button>
        </FormItem>
      </Form>
    )
  }
}

export default Form.create()(Login)
