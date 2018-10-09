import {
  Icon,
  Tooltip,
} from 'antd'
import les from './index.less'

const UserInfo = ({
  dispatch,
  app,
}) => {
  // 提取属性
  const {
    user,
  } = app

  // 方法定义
  /** 退出登录 */
  const logout = () => {
    dispatch({ type: 'app/logout' })
  }

  return (
    <div className={les.container}>
      <div className={les.userInfo}>
        <div className={les.img}>
          <img src={require('@static/user.jpg')} alt=""/>
        </div>
        <div className={les.info}>
          <div className={les.name}>{user.username}</div>
          <div className={les.setting}>
            {/* 退出登录 */}
            <Tooltip
              placement='bottom'
              title='退出登录'
            ><Icon type="logout" onClick={logout} /></Tooltip>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserInfo
