import {
  Modal,
} from 'antd'
import {
  getEntireMonth,
  getEntireWeek,
  getEntireDay,
} from '@utils/func'
import les from './index.less'
import MoneyLab from '../moneyLab'

const ModalBudget = ({
  dispatch,
  visible,
  budget,
}) => {
  // props collect

  // props definition
  const propsOfModal = {
    visible,
    title: '预算编辑',
    footer: null,
    onCancel: () => {
      dispatch({ type: 'today/showModalBudget', show: false })
    },
  }

  // function difinition
  const initMoneyLab = (valueType, rateType) => {
    const propsOfMoneyLab = {
      dispatch,
      budget,
      valueType,
      rateType,
      canEdit: true,
    }
    return (
      <MoneyLab {...propsOfMoneyLab} />
    )
  }

  return (
    <Modal {...propsOfModal}>
      <table className={les.table}>
        <tbody>
          <tr>
            <td className={les.titleTd}></td>
            <td className={les.incomeTd}>收入</td>
            <td className={les.outlayTd}>支出</td>
            <td className={les.netTd}>净资产</td>
          </tr>
          <tr>
            <td className={les.titleTd}>年</td>
            <td className={les.incomeTd}>
              {initMoneyLab('income', 'year')}
            </td>
            <td className={les.outlayTd}>
              {initMoneyLab('outlay', 'year')}
            </td>
            <td className={les.netTd}>
              {initMoneyLab('net', 'year')}
            </td>
          </tr>
          <tr>
            <td className={les.titleTd}>({getEntireMonth()})月</td>
            <td className={les.incomeTd}>
              {initMoneyLab('income', 'month')}
            </td>
            <td className={les.outlayTd}>
              {initMoneyLab('outlay', 'month')}
            </td>
            <td className={les.netTd}>
              {initMoneyLab('net', 'month')}
            </td>
          </tr>
          <tr>
            <td className={les.titleTd}>({getEntireWeek()})周</td>
            <td className={les.incomeTd}>
              {initMoneyLab('income', 'week')}
            </td>
            <td className={les.outlayTd}>
              {initMoneyLab('outlay', 'week')}
            </td>
            <td className={les.netTd}>
              {initMoneyLab('net', 'week')}
            </td>
          </tr>
          <tr>
            <td className={les.titleTd}>({getEntireDay()})日</td>
            <td className={les.incomeTd}>
              {initMoneyLab('income', 'day')}
            </td>
            <td className={les.outlayTd}>
              {initMoneyLab('outlay', 'day')}
            </td>
            <td className={les.netTd}>
              {initMoneyLab('net', 'day')}
            </td>
          </tr>
          <tr>
            <td className={les.titleTd}>标签</td>
            <td className={les.incomeTd}></td>
            <td className={les.outlayTd}></td>
            <td className={les.netTd}></td>
          </tr>
        </tbody>
      </table>
    </Modal>
  )
}

export default ModalBudget
