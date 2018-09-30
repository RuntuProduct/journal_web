import {
  Icon,
} from 'antd'
import {
  Title,
} from '@com'
import les from './index.less'
import Short from './components/short'

const Today = () => {
  return (
    <div>
      {/* 标题 */}
      <Title
        label={(
          <span><Icon type="pie-chart" />今天结算</span>
        )}
      />
      <div className={les.lab}>
        {/* 统计仪表 */}
        <Short />
        {/* 待办列表 */}
      </div>
    </div>
  )
}

export default Today
