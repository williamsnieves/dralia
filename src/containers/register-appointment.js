import { connect } from 'react-redux'
import RegisterAppointment from '../components/appointment/register-appointment'
import { restoreStatusAppointment } from '../actions/appointment'

const mapStateToProps = state => {
  const success = state.appointment.success
  const isLoading = state.appointment.isLoading
  return {
    success,
    isLoading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    restoreStatusAppointment: () => dispatch(restoreStatusAppointment())
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(RegisterAppointment)
