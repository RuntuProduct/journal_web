import les from './index.less'
import WeekLab from '../weekLab'
import DayLab from '../dayLab'
import MonthLab from '../monthLab'
import YearLab from '../yearLab'

const Target = ({
  index,
}) => {
  // 属性提取
  const {
    dayList,
    weekList,
    monthList,
    yearList,
  } = index

  // 属性定义
  const propsOfWeekLab = {
    list: weekList,
  }
  const propsOfDayLab = {
    list: dayList,
  }
  const propsOfMonthLab = {
    list: monthList,
  }
  const propsOfYearLab = {
    list: yearList,
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
