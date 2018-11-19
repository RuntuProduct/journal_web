import les from './index.less'
import BaseLab from '../baseLab'

const yearLab = ({
  dispatch,
  loading,
  today,
}) => {
  // props collect
  const {
    yearData,
  } = today

  // props definition
  const propsOfBaseLab = {
    className: les.container,
    title: '年',
    data: yearData,
  }

  return (
    <BaseLab {...propsOfBaseLab}>yaer</BaseLab>
  )
}

export default yearLab
