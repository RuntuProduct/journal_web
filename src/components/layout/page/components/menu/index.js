import les from './index.less'
import Mark from './components/mark'
import UserInfo from './components/userInfo'

const Menus = () => {
  return (
    <div className={les.menuCon}>
      {/* 标题 */}
      <Mark />
      {/* 用户信息 */}
      <UserInfo />
      {/* 菜单 */}
    </div>
  )
}

export default Menus
