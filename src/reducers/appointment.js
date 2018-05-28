import {
  SLOT_SUCCESS,
  SLOT_FAILURE,
  SLOT_REQUEST,
  APPOINTMENT_REQUEST,
  APPOINTMENT_FAILURE,
  APPOINTMENT_SUCCESS,
  APPOINTMENT_RESTORE
} from '../constants/appointment'

const initialState = {
  error: null,
  isLoading: false,
  data: {
    list: null
  },
  success: null
}

const appointment = (state = initialState, action) => {
  switch (action.type) {
    case SLOT_REQUEST:
      return { ...state, isLoading: true, error: null }
    case SLOT_FAILURE:
      return { ...state, isLoading: false, error: 'custom error' }
    case SLOT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: { list: action.slots }
      }
    case APPOINTMENT_REQUEST:
      return { ...state, isLoading: true, error: null }
    case APPOINTMENT_FAILURE:
      return { ...state, isLoading: false, error: action.error }
    case APPOINTMENT_SUCCESS:
      return {
        ...state,
        isLoading: false,
        success: true
      }
    case APPOINTMENT_RESTORE:
      return { ...state, success: null }
    default:
      return state
  }
}
export default appointment
