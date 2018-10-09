import les from './index.less'
import Mark from './components/mark'
import UserInfo from './components/userInfo'
import Menu from './components/menu'

const Menus = ({
  dispatch,
  app,
}) => {
  const propsOfUserInfo = {
    dispatch,
    app,
  }
  return (
    <div className={les.menuCon}>
      {/* 标题 */}
      <Mark />
      {/* 用户信息 */}
      <UserInfo {...propsOfUserInfo} />
      {/* 菜单 */}
      <Menu />
    </div>
  )
}

export default Menus
