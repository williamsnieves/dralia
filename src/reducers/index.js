import { combineReducers } from 'redux'
import login from './login'
import appointment from './appointment'

const appReducers = combineReducers({
  login,
  appointment
})

export default appReducers
