import les from './index.less'
import {
  Icon,
} from 'antd'
import {
  Title,
  Budget,
} from '@com'

const DayLab = () => {
  return (
    <div className={les.container}>
      {/* 标题 */}
      <Title label={'日目标'} />
      <div>
        {/* 预算使用情况 */}
        {/* <Budget spand={100} budget={420} /> */}
      </div>
    </div>
  )
}

export default DayLab
