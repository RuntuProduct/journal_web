import {
  Checkbox,
  Icon,
  Tooltip,
  Spin,
} from 'antd'
import les from './index.less'

const TaskList = ({
  dispatch,
  loading,
  data,
}) => {
  // props definition
  const ifLoading = loading.effects['index/completeTask'] || loading.effects['index/getList']

  // function definition
  const handleCheck = (id, nowCheck) => {
    dispatch({
      type: 'index/completeTask',
      payload: {
        id,
        completed: nowCheck === 'Y' ? 'N' : 'Y',
      },
    })
  }
  
  // 渲染方法定义
  const mapTask = (ary) => {
    return ary.map((ar) => {
      return (
        <li
          key={ar.id}
          className={`${les.item} ${ar.completed === 'Y' ? les.completed : ''}`}
        >
          <div className={les.wrapper}>
            <div className={les.wrapCb}>
              <Checkbox
                disabled={ifLoading}
                checked={ar.completed === 'Y'}
                onChange={() => handleCheck(ar.id, ar.completed)}
              />
            </div>
            <div className={les.wrapTit}>{ar.title}</div>
            <div className={`${les.wrapDesc} ${ar.description ? '' : les.hidden}`}>
              <Tooltip title={ar.description}><Icon type="profile" /></Tooltip>
            </div>
            { 
              ifLoading &&
              <Spin
                className={les.loadingWrapper}
                spinning={ifLoading}
              />
            }
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
