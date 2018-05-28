import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST } from '../constants/login'
import { authUser } from '../helpers/auth'

export const loginFailure = error => {
  return {
    type: LOGIN_FAILURE,
    error
  }
}

export const loginRequest = () => {
  return {
    type: LOGIN_REQUEST
  }
}

export const loginSuccess = token => {
  return {
    type: LOGIN_SUCCESS,
    token
  }
}
export const fetchLogin = (email, password) => {
  return dispatch => {
    dispatch(loginRequest())
    return authUser(email, password)
      .then(result => {
        if (result) {
          dispatch(loginSuccess(result))
        }
      })
      .catch(error => {
        dispatch(loginFailure(error))
      })
  }
}
