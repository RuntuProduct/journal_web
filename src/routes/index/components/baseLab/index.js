import les from './index.less'
import {
  Icon,
} from 'antd'

const BaseLab = ({
  className,
  title,
  data,
  extra,
  onCreate = () => {},
  children,
}) => {
  return (
    <div className={`${les.container} ${className || ''}`}>
      <div className={les.title}>{title}</div>
      <div className={les.content}>
        { data ?
          children :
          <div className={les.noContent} onClick={() => onCreate()}>
            <div>添加{title}纪</div>
            <Icon type="plus-circle" />
          </div>
        }
        {
          typeof extra === 'function' ?
          <div className={les.extraCon}>{extra()}</div> :
          <div className={les.extraCon}>{extra}</div>
        }
      </div>
    </div>
  )
}

export default BaseLab
