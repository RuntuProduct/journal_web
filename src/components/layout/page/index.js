import Menus from './components/menu'
import les from './index.less'

const Page = ({
  children,
}) => {
  return (
    <div className={les.body}>
      {/* 左侧菜单栏 */}
      <Menus />
      {/* 右侧内容栏 */}
      <div className={les.container}>
        <div className={les.content}>{children}</div>
        <div className={les.footer}>copyright</div>
      </div>
    </div>
  )
}

export default Page
