import React, { Component } from 'react'
import './small.scss'
import { getFormatDay, getDayFromDate } from '../../helpers/date'
import sortBy from 'lodash/sortBy'
import { Schedule } from './schedule'
import Modal from '../common/modal'
import RegisterAppointment from '../../containers/register-appointment'

export default class Appointment extends Component {
  constructor (props) {
    super(props)
    this.state = {
      weekDays: [1, 2, 3, 4, 5, 6, 7],

      scheduleState: false,
      currentScheduleEl: null,
      openModal: false,
      currentSlot: {}
    }
  }

  componentDidMount () {
    this.props.getSlots()
  }

  handleAppointmentStatus (event, slot) {
    event.preventDefault()
    const scheduleState = this.state.scheduleState
    this.setState({
      scheduleState: !scheduleState,
      currentScheduleEl: event.currentTarget.id,
      openModal: true,
      currentSlot: slot
    })
  }

  renderAppointmentsPerDay (slot, dayWeek, key) {
    const { start, end } = getFormatDay(slot)
    const day = getDayFromDate(slot)
    const className = this.state.scheduleState &&
      this.state.currentScheduleEl === `schedule-${key}`
      ? `Schedule Marked`
      : 'Schedule'
    if (dayWeek === day) {
      return (
        <a
          id={`schedule-${key}`}
          href='#'
          className={className}
          onClick={event => this.handleAppointmentStatus(event, slot)}
        >
          {start}
        </a>
      )
    }
  }

  handleSchedule (data) {
    this.props.sendAppointmentData(data)
  }

  handleCloseModal () {
    const scheduleState = this.state.scheduleState
    this.setState({ openModal: false, scheduleState: false })
  }

  handleSuccessAppointment (success) {
    const scheduleState = this.state.scheduleState
    if (success) {
      this.setState({ openModal: false, scheduleState: true })
    }
  }

  render () {
    const sortedSlotList =
      this.props.slotList && sortBy(this.props.slotList, ['hour'])

    return (
      <div>
        <Modal
          className='Modal'
          visible={this.state.openModal}
          onClose={() => this.handleCloseModal()}
        >
          <RegisterAppointment
            slot={this.state.currentSlot}
            isLoading={this.props.isLoading}
            success={this.props.success}
            onPress={data => this.handleSchedule(data)}
            onSuccessAppointment={success =>
              this.handleSuccessAppointment(success)}
          />
        </Modal>
        <section className='Appointment'>
          <div className='Appointment-row Appointment-header'>
            <div className='Appointment-row-item'>
              <svg
                className='Appointment__header-navigation Appointment__header-navigation--left'
                enableBackground='new 0 0 32 32'
                height='32px'
                id='Layer_1'
                version='1.1'
                viewBox='0 0 32 32'
                width='32px'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M24.291,14.276L14.705,4.69c-0.878-0.878-2.317-0.878-3.195,0l-0.8,0.8c-0.878,0.877-0.878,2.316,0,3.194  L18.024,16l-7.315,7.315c-0.878,0.878-0.878,2.317,0,3.194l0.8,0.8c0.878,0.879,2.317,0.879,3.195,0l9.586-9.587  c0.472-0.471,0.682-1.103,0.647-1.723C24.973,15.38,24.763,14.748,24.291,14.276z'
                  fill='white'
                />
              </svg>
            </div>
            <div className='Appointment-row-item'>Monday</div>
            <div className='Appointment-row-item'>Tuesday</div>
            <div className='Appointment-row-item'>Wednesday</div>
            <div className='Appointment-row-item'>Thursday</div>
            <div className='Appointment-row-item'>Friday</div>
            <div className='Appointment-row-item'>Saturday</div>
            <div className='Appointment-row-item'>Sunday</div>
            <div className='Appointment-row-item'>
              <svg
                className='Appointment__header-navigation Appointment__header-navigation--right'
                enableBackground='new 0 0 32 32'
                height='32px'
                id='Layer_1'
                version='1.1'
                viewBox='0 0 32 32'
                width='32px'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  d='M24.291,14.276L14.705,4.69c-0.878-0.878-2.317-0.878-3.195,0l-0.8,0.8c-0.878,0.877-0.878,2.316,0,3.194  L18.024,16l-7.315,7.315c-0.878,0.878-0.878,2.317,0,3.194l0.8,0.8c0.878,0.879,2.317,0.879,3.195,0l9.586-9.587  c0.472-0.471,0.682-1.103,0.647-1.723C24.973,15.38,24.763,14.748,24.291,14.276z'
                  fill='white'
                />
              </svg>
            </div>
          </div>
          {sortedSlotList &&
            sortedSlotList.map((slot, keylist) => {
              return (
                <div key={keylist} className='Appointment-row'>
                  <div className='Appointment-row-item' />

                  {this.state.weekDays.map((day, key) => {
                    return (
                      <div key={key} className='Appointment-row-item'>
                        {this.renderAppointmentsPerDay(slot, day, keylist)}
                      </div>
                    )
                  })}
                  <div className='Appointment-row-item' />
                </div>
              )
            })}
        </section>
      </div>
    )
  }
}
