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
      valueType, //income,outlay,net
      value,
      rateType, // year,month,week,day
      canEdit,
      handleChange,
    } = this.props
    const {
      editModalVisible,
    } = this.state
    const that = this

    // props count
    const allMonth = getEntireMonth()
    const allWeek = getEntireWeek()
    const allDay = getEntireDay()
    const mathValue = parseInt(value, 10)
    if (!mathValue) {
      throw new Error('invalid value')
    }
    let rateValue
    if (rateType === 'year') {
      rateValue = mathValue.toFixed(0)
    } else if (rateType === 'month') {
      rateValue = (mathValue / allMonth).toFixed(0)
    } else if (rateType === 'week') {
      rateValue = (mathValue / allWeek).toFixed(0)
    } else if (rateType === 'day') {
      rateValue = (mathValue / allDay).toFixed(0)
    } else {
      throw new Error(`invalid value ${rateType}`)
    }

    const typeClass = les[valueType]

    // function definition
    const updataValue = ({ value }) => {
      that.editModalHide()
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
      baseValue: rateValue,
    }

    return (
      <div className={`${les.moneyLab} ${typeClass}`}>
        <span>{rateValue}</span>
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
