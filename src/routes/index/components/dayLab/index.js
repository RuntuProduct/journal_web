import les from './index.less'
import {
  Icon,
} from 'antd'
import {
  Title,
} from '@com'

const DayLab = () => {
  return (
    <div className={les.container}>
      {/* 标题 */}
      <Title label={'日目标'} />
      <div>content</div>
    </div>
  )
}

export default DayLab
