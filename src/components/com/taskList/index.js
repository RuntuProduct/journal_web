import { Checkbox } from 'antd'
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
            <Checkbox />
            {ar.title}
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
