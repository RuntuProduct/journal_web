import les from './index.less'
import DayLab from '../dayLab'
import WeekLab from '../weekLab'
import MonthLab from '../monthLab'
import YearLab from '../yearLab'

const RecordLab = () => {
  return (
    <div className={les.container}>
      <div className={les.floatCon}>
        <DayLab />
        <WeekLab />
        <MonthLab />
        <YearLab />
      </div>
    </div>
  )
}

export default RecordLab
