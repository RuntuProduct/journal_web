import les from './index.less'
import { Progress } from 'antd'

const Budget = ({
  spand,
  budget,
}) => {
  const percent = Math.floor((spand / budget) * 100)
  return (
    <div className={les.container}>
      <div className={les.txtLab}>
        <div className={les.target}>
          <span className={les.label}>预算剩余：</span>
          <span className={les.value}>{ budget - spand }</span>
        </div>
        <div className={les.target}>
          <span className={les.label}>使用情况：</span>
          <span className={les.value}>{spand}/{budget}</span>
        </div>
      </div>
      <Progress
        percent={percent}
      />
    </div>
  )
}

export default Budget
