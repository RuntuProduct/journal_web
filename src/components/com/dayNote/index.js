import les from './index.less'
import Today from './components/today'

const DayNote = () => {
  return (
    <div className={les.container}>
      {/* 当天结算 */}
      <Today />
      {/* 月结算和年结算 */}
    </div>
  )
}

export default DayNote
