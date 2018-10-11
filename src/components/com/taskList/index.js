import {
  Checkbox,
  Icon,
  Tooltip,
} from 'antd'
import les from './index.less'

const TaskList = ({
  data,
}) => {
  // 渲染方法定义
  const mapTask = (ary) => {
    return ary.map((ar) => {
      return (
        <li
          key={ar._id}
          className={les.item}
        >
          <div className={les.wrapper}>
            <div className={les.wrapCb}>
              <Checkbox />
            </div>
            <div className={les.wrapTit}>{ar.title}</div>
            <div className={`${les.wrapDesc} ${ar.desc ? '' : les.hidden}`}>
              <Tooltip title={ar.desc}><Icon type="profile" /></Tooltip>
            </div>
          </div>
        </li>
      )
    })
  }
  return (
    <ul className={les.container}>
      {
        (data && data.length) ?
          mapTask(data) :
          <li className={les.itemBlank}>no content</li>
      }
    </ul>
  )
}

export default TaskList
