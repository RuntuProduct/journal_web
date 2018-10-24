import { connect } from 'dva'
import les from './index.less'
import {
  DayNote,
} from '@com'
import TaskCreate from '@/components/view/taskCreate'
import Target from './components/target'

const PageIndex = ({
  dispatch,
  loading,
  index,
}) => {
  // 属性定义
  const propsOfTarget = {
    dispatch,
    loading,
    index,
  }

  return (
    <div className={les.contaienr}>
      {/* 今日总结栏 */}
      <DayNote />
      {/* 日月年目标栏 */}
      <Target {...propsOfTarget} />
      {/* 任务新增 */}
      <TaskCreate />
    </div>
  );
}

export default connect(({ loading, index }) => ({ loading, index }))(PageIndex)
