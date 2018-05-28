import moment from 'moment'

export const getFormatDay = slot => {
  const start = moment(slot.Start).format('HH:mm')
  const end = moment(slot.End).format('HH:mm')
  const completeStart = moment(slot.Start).format('YYYY-MM-DD HH:mm:ss')
  const completeEnd = moment(slot.End).format('YYYY-MM-DD HH:mm:ss')
  return { start, end, completeStart, completeEnd }
}

export const getDayFromDate = slot => {
  return moment(slot.Start).day()
}
