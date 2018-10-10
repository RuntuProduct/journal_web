import les from './index.less'
import WeebLab from '../weekLab'
import DayLab from '../dayLab'
import MonthLab from '../monthLab'
import YearLab from '../yearLab'

const Target = () => {
  return (
    <div className={les.container}>
      <div className={les.floatCon}>
        <WeebLab />
        <DayLab />
        <MonthLab />
        <YearLab />
      </div>
    </div>
  )
}

export default Target
