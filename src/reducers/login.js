import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST } from '../constants/login'

const initialState = {
  error: null,
  isLoading: false,
  data: {
    token: ''
  }
}

const login = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, isLoading: true, error: null }
    case LOGIN_FAILURE:
      return { ...state, isLoading: false, error: action.error }
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: { token: action.token }
      }
    default:
      return state
  }
}

export default login
