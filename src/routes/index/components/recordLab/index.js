import les from './index.less'
import DayLab from '../dayLab'
import WeekLab from '../weekLab'
import MonthLab from '../monthLab'
import YearLab from '../yearLab'

const RecordLab = ({
  dispatch,
  loading,
  today,
}) => {
  // props definition
  const propsOfYearLab = {
    dispatch,
    loading,
    today,
  }

  return (
    <div className={les.container}>
      <div className={les.floatCon}>
        <DayLab />
        <WeekLab />
        <MonthLab />
        <YearLab {...propsOfYearLab} />
      </div>
    </div>
  )
}

export default RecordLab
