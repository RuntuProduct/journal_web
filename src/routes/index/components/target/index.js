import les from './index.less'
import WeekLab from '../weekLab'
import DayLab from '../dayLab'
import MonthLab from '../monthLab'
import YearLab from '../yearLab'

const Target = ({
  dispatch,
  loading,
  today,
}) => {
  // 属性定义
  const propsOfYearLab = {
    dispatch,
    loading,
    today,
  }
  const propsOfMonthLab = {
    dispatch,
    loading,
    today,
  }
  const propsOfWeekLab = {
    dispatch,
    loading,
    today,
  }
  const propsOfDayLab = {
    dispatch,
    loading,
    today,
  }

  return (
    <div className={les.container}>
      <div className={les.floatCon}>
        <WeekLab {...propsOfWeekLab} />
        <DayLab {...propsOfDayLab} />
        <MonthLab {...propsOfMonthLab} />
        <YearLab {...propsOfYearLab} />
      </div>
    </div>
  )
}

export default Target
