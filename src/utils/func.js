import moment from 'moment'

/** get the last day of this year */
export const getLastDay = () => {
  return moment().month(11).date(31)
}

/** get remain month number of this year */
export const getRemainMonth = () => {
  return getLastDay().month() - moment().month()
}

/** get remain week number of this year */
export const getRemainWeek = () => {
  return moment().weeksInYear() - moment().week() 
}

/** get remain day number of this year */
export const getRemainDay = () => {
  return getLastDay().dayOfYear() - moment().dayOfYear()
}
