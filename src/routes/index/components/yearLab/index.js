import les from './index.less'
import BaseLab from '../baseLab'
import ModalYearCreate from './components/modalYearCreate'

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
  const propsOfModalYearCreate = {
    dispatch,
    loading,
    today,
  }
  const propsOfBaseLab = {
    className: les.container,
    title: '年',
    data: yearData,
    extra: () => {
      return (
        <div>
          <ModalYearCreate {...propsOfModalYearCreate} />
        </div>
      )
    },
    onCreate: () => {
      dispatch({
        type: 'today/showModalYearCreate',
        show: true,
      })
    },
  }

  return (
    <BaseLab {...propsOfBaseLab}>
      year
    </BaseLab>
  )
}

export default yearLab
