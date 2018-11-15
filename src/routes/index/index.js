import { connect } from 'dva'
import les from './index.less'
import RecordLab from './components/recordLab'

const PageIndex = ({
  dispatch,
  loading,
  today,
}) => {
  // 属性定义
  const propsOfTarget = {
    dispatch,
    loading,
    today,
  }

  return (
    <div className={les.contaienr}>
      <RecordLab />
    </div>
  );
}

export default connect(({ loading, today }) => ({ loading, today }))(PageIndex)
