import les from './index.less'
import {
  Title,
  Budget,
  TaskList,
} from '@com'

const DayLab = ({
  dispatch,
  loading,
  today,
}) => {
  // prop collect
  const {
    dayData,
  } = today

  // 属性定义
  const propsOfTaskList = {
    dispatch,
    loading,
    data: dayData.taskList,
  }

  return (
    <div className={les.container}>
      {/* 标题 */}
      <Title label={'日目标'} />
      <div>
        {/* 预算使用情况 */}
        {/* <Budget spand={100} budget={420} /> */}
        <TaskList {...propsOfTaskList} />
      </div>
    </div>
  )
}

export default DayLab
