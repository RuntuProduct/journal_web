import les from './index.less'
import {
  Title,
} from '@com'

const WeekLab = () => {
  return (
    <div className={les.container}>
      {/* 标题 */}
      <Title label={'周目标'} />
    </div>
  )
}

export default WeekLab
