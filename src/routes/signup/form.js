import {
  Form,
  Input,
  Icon,
  Button,
} from 'antd'
import { routerRedux } from 'dva/router'
import les from './index.less'

const FormItem = Form.Item

const hasErrors = (fieldsError) => {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class Login extends React.Component {
  state = {
    confirmDirty: false,
  }

  componentDidMount() {
    document.title = '日记 - 注册'
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const { dispatch } = this.props
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
        dispatch({ type: 'app/signup', payload: values })
      }
    })
  }

  handleBack = () => {
    const { dispatch } = this.props
    dispatch(routerRedux.push('/login'))
  }

  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form
    if (value && value !== form.getFieldValue('password')) {
      callback('你输入的两次密码不相同！');
    } else {
      callback();
    }
  }

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirm'], { force: true });
    }
    callback();
  }

  render () {
    const {
      form,
    } = this.props
    const {
      getFieldDecorator,
      getFieldsError,
    } = form

    return (
      <Form
        layout="vertical"
        onSubmit={this.handleSubmit}
      >
        <FormItem>
          {getFieldDecorator('username')(
            <Input
              prefix={(
                <Icon
                  type="robot"
                  style={{ color: 'rgba(0,0,0,.25)' }}
                  />
              )}
              placeholder="用户名"
            />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('account', {
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
        <FormItem>
          {getFieldDecorator('password', {
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
          {getFieldDecorator('confirm', {
            rules: [
              { required: true, message: '请再输入一次' },
              { validator: this.compareToFirstPassword }
            ],
          })(
            <Input
              prefix={(
                <Icon
                  type="lock"
                  style={{ color: 'rgba(0,0,0,.25)' }}
                />
              )}
              type="password"
              placeholder="请再输入一次"
              onBlur={this.handleConfirmBlur}
            />
          )}
        </FormItem>
        <FormItem>
          <Button
            htmlType="submit"
            className={les.submit}
            disabled={hasErrors(getFieldsError())}
          >
            提交
          </Button>
          <Button
            className={les.back}
            disabled={hasErrors(getFieldsError())}
            onClick={this.handleBack}
          >
            返回
          </Button>
        </FormItem>
      </Form>
    )
  }
}

export default Form.create()(Login)
