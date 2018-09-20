import {
  Icon,
  Tooltip,
} from 'antd'
import les from './index.less'

const UserInfo = () => {
  return (
    <div className={les.container}>
      <div className={les.userInfo}>
        <div className={les.img}>
          <img src={require('@static/user.jpg')} alt=""/>
        </div>
        <div className={les.info}>
          <div className={les.name}>默认用户1231312312333</div>
          <div className={les.setting}>
            {/* 退出登录 */}
            <Tooltip
              placement='bottom'
              title='退出登录'
            ><Icon type="logout" /></Tooltip>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserInfo
