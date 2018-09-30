import les from './index.less'
import DayLab from '../dayLab'
import MonthLab from '../monthLab'
import YearLab from '../yearLab'

const Target = () => {
  return (
    <div className={les.container}>
      <DayLab />
      <MonthLab />
      <YearLab />
    </div>
  )
}

export default Target
