import { connect } from 'react-redux'
import { fetchLogin } from '../actions/login'
import Login from '../components/login'

const mapStateToProps = state => {
  const error = state.login.error
  return {
    error
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchLogin: (email, password) => dispatch(fetchLogin(email, password))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
