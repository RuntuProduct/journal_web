import les from './index.less';
import {
  DayNote,
} from '@com'
import TaskCreate from '@/components/view/taskCreate'
import Target from './components/target'

export default function() {
  return (
    <div className={les.contaienr}>
      {/* 今日总结栏 */}
      <DayNote />
      {/* 日月年目标栏 */}
      <Target />
      {/* 任务新增 */}
      <TaskCreate />
    </div>
  );
}
