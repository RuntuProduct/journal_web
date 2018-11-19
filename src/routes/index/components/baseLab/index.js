import les from './index.less'
import {
  Icon,
} from 'antd'

const BaseLab = ({
  className,
  title,
  data,
  children,
}) => {
  return (
    <div className={`${les.container} ${className || ''}`}>
      <div className={les.title}>{title}</div>
      <div className={les.content}>
        { data ?
          children :
          <div className={les.noContent}>
            <div>添加{title}纪</div>
            <Icon type="plus-circle" />
          </div>
        }
      </div>
    </div>
  )
}

export default BaseLab
