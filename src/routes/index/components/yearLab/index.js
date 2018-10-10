import les from './index.less'
import {
  Title,
  TaskList,
} from '@com'

const MonthLab = ({
  list,
}) => {
  // 属性定义
  const propsOfTaskList = {
    data: list,
  }

  return (
    <div className={les.container}>
      {/* 标题 */}
      <Title label={'年目标'} />
      {/* 内容 */}
      <div>
        <TaskList {...propsOfTaskList} />
      </div>
    </div>
  )
}

export default MonthLab
