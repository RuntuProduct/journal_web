import les from './index.less'
import {
  Title,
  TaskList,
} from '@com'
import BudgetLab from './components/budgetLab'
import ModalBudget from './components/modalBudget'

const MonthLab = ({
  dispatch,
  loading,
  today,
}) => {
  // 获取属性
  const {
    yearData,
    modalBudgetVisible,
  } = today
  // 属性定义
  const propsOfBudgetLab = {
    dispatch,
    today,
  }
  const propsOfTaskList = {
    dispatch,
    loading,
    data: yearData.taskList,
  }
  const propsOfModalBudget = {
    dispatch,
    visible: modalBudgetVisible,
    budget: yearData.budget,
  }

  return (
    <div className={les.container}>
      {/* 标题 */}
      <Title label={'年目标'} />
      {/* 内容 */}
      <div>
        <BudgetLab {...propsOfBudgetLab} />
        <TaskList {...propsOfTaskList} />
        <ModalBudget {...propsOfModalBudget} />
      </div>
    </div>
  )
}

export default MonthLab
