import {
  Button,
} from 'antd'
import {
  getEntireMonth,
  getEntireWeek,
  getEntireDay,
} from '@utils/func'
import les from './index.less'
import ModalEdit from './modalEdit'

class MoneyLab extends React.Component {
  state = {
    editModalVisible: false,
  }

  editModalShow = () => {
    this.setState({ editModalVisible: true })
  }

  editModalHide = () => {
    this.setState({ editModalVisible: false })
  }

  render () {
    // props collect
    const {
      dispatch,
      budget,
      valueType, //income,outlay,net
      rateType, // year,month,week,day
      canEdit,
      handleChange,
    } = this.props
    const {
      editModalVisible,
    } = this.state
    const that = this

    // props count
    let rateValue
    if (valueType === 'income' || valueType === 'outlay') {
      rateValue = budget[`${valueType}_${rateType}`]
    } else {
      rateValue = budget[`income_${rateType}`] - budget[`outlay_${rateType}`]
    }

    const typeClass = les[valueType]

    // function definition
    const updataValue = ({ value }) => {
      that.editModalHide()
      dispatch({})
      if (rateType === 'year') {
        handleChange({ value })
      } else if (rateType === 'month') {
        handleChange({ value: value * 12 })
      } else if (rateType === 'week') {
        handleChange({ value: (value / 7 * 365).toFixed(0) })
      } else if (rateType === 'day') {
        handleChange({ value: value * 365 })
      }
    }

    // props definition
    const propsOfModalEdit = {
      handleHide: this.editModalHide,
      handleChange: updataValue,
      visible: editModalVisible,
    }

    return (
      <div className={`${les.moneyLab} ${typeClass}`}>
        <span>{rateValue || 0}</span>
        {
          canEdit &&
          <Button
            icon='edit'
            type='dashed'
            title='edit'
            size='small'
            className={les.edit}
            onClick={this.editModalShow}
          />
        }
        <ModalEdit {...propsOfModalEdit} />
      </div>
    )
  }
}

export default MoneyLab
