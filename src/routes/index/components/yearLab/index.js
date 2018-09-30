import les from './index.less'
import {
  Icon,
} from 'antd'
import {
  Title,
} from '@com'

const MonthLab = () => {
  return (
    <div className={les.container}>
      {/* 标题 */}
      <Title label={'年目标'} />
      {/* 内容 */}
      <div>content</div>
    </div>
  )
}

export default MonthLab
