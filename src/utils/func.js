import moment from 'moment'

/** get the last day of this year */
export const getLastDay = () => {
  return moment().month(11).date(31)
}

/** get remain month number of this year */
export const getEntireMonth = () => {
  return 12
}

/** get remain week number of this year */
export const getEntireWeek = () => {
  return moment().weeksInYear()
}

/** get remain day number of this year */
export const getEntireDay = () => {
  return getLastDay().dayOfYear()
}
