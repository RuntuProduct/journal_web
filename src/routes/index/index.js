import { connect } from 'dva'
import les from './index.less'
import RecordLab from './components/recordLab'

const PageIndex = ({
  dispatch,
  loading,
  today,
}) => {
  // 属性定义
  const propsOfRecordLab = {
    dispatch,
    loading,
    today,
  }

  return (
    <div className={les.contaienr}>
      <RecordLab {...propsOfRecordLab} />
    </div>
  );
}

export default connect(({ loading, today }) => ({ loading, today }))(PageIndex)
