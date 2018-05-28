import { connect } from 'react-redux'
import { fetchLogin } from '../actions/login'
import { checkIfUserIsLogged } from '../helpers/auth'
import Dashboard from '../components/layouts/dashboard'

const mapStateToProps = state => {
  const token = state.login.data.token
  const error = state.login.error
  return {
    token,
    error
  }
}

const mapDispatchToProps = dispatch => {
  return {
    checkUserLogin: checkIfUserIsLogged()
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
