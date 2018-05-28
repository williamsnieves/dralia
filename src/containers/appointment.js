import { connect } from 'react-redux'
import { fetchSlots, sendAppointmentData } from '../actions/appointment'
import Appointment from '../components/appointment'
import { getFormatDay } from '../helpers/date'

const mapStateToProps = state => {
  const slotList =
    state.appointment.data.list &&
    state.appointment.data.list.map(result => {
      return { ...result, hour: getFormatDay(result).start }
    })
  const successSaveAppointment = state.appointment.success
  const isLoading = state.appointment.isLoading
  return {
    slotList,
    successSaveAppointment,
    isLoading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getSlots: () => dispatch(fetchSlots()),
    sendAppointmentData: data => dispatch(sendAppointmentData(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Appointment)
