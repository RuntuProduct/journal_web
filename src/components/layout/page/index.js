import Menus from './components/menu'
import les from './index.less'

const Page = () => {
  return (
    <div className={les.body}>
      {/* 左侧菜单栏 */}
      <Menus />
      {/* 右侧内容栏 */}
    </div>
  )
}

export default Page
