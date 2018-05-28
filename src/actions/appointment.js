import {
  SLOT_SUCCESS,
  SLOT_FAILURE,
  SLOT_REQUEST,
  APPOINTMENT_REQUEST,
  APPOINTMENT_FAILURE,
  APPOINTMENT_SUCCESS,
  APPOINTMENT_RESTORE
} from '../constants/appointment'

import { getSlots, saveSlot } from '../helpers/slots'
import { getFormatDay } from '../helpers/date'

export const slotFailure = () => {
  return {
    type: SLOT_FAILURE
  }
}

export const slotSuccess = slots => {
  return {
    type: SLOT_SUCCESS,
    slots
  }
}

export const slotRequest = () => {
  return {
    type: SLOT_REQUEST
  }
}

export const appointmentFailure = error => {
  return {
    type: APPOINTMENT_FAILURE,
    error
  }
}

export const appointmentSuccess = () => {
  return {
    type: APPOINTMENT_SUCCESS
  }
}

export const appointmentRequest = () => {
  return {
    type: APPOINTMENT_REQUEST
  }
}

export const restoreStatusAppointment = () => {
  return {
    type: APPOINTMENT_RESTORE
  }
}

export const fetchSlots = () => {
  return dispatch => {
    dispatch(slotRequest())
    return getSlots()
      .then(result => result.json())
      .then(slots => dispatch(slotSuccess(slots)))
      .catch(error => error)
  }
}

export const sendAppointmentData = data => {
  const formatDate = getFormatDay(data.slot)
  delete data.slot
  data = {
    ...data,
    Start: formatDate.completeStart,
    End: formatDate.completeEnd,
    Patient: {
      Name: localStorage.getItem('name'),
      SecondName: localStorage.getItem('lastname'),
      Email: localStorage.getItem('email'),
      Phone: '555 12 34 56'
    }
  }
  return dispatch => {
    dispatch(appointmentRequest())
    return saveSlot(JSON.stringify(data))
      .then(result => {
        return result
      })
      .then(slot => {
        if (slot.status === 200) {
          return dispatch(appointmentSuccess())
        }
      })
      .catch(error => dispatch(appointmentFailure(error)))
  }
}
