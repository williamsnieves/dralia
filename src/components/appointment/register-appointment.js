import React, { Component } from 'react'

export default class RegisterAppointment extends Component {
  constructor (props) {
    super(props)
    this.state = {
      comment: '',
      appointmentSaved: false
    }
  }

  componentWillUpdate (nextProps) {
    if (nextProps.success) {
      this.props.onSuccessAppointment(nextProps.success)
      this.props.restoreStatusAppointment()
    }
  }
  handleRegisterData (slot) {
    const data = {
      slot,
      Comments: this.state.comment
    }
    this.props.onPress(data)
  }
  handleChange (event) {
    this.setState({
      comment: event.target.value
    })
  }
  render () {
    const { slot, onPress } = this.props
    return (
      <div className='Register'>
        <input
          className='Register__input'
          type='text'
          placeholder='Start'
          value={slot.Start}
          disabled
        />
        <input
          className='Register__input'
          type='text'
          placeholder='End'
          value={slot.End}
          disabled
        />
        <textarea
          name=''
          id=''
          cols='30'
          rows='10'
          placeholder='comments'
          onChange={event => this.handleChange(event)}
        />
        <button
          className='Register__button'
          onClick={() => this.handleRegisterData(slot)}
        >
          Save appointment
        </button>
      </div>
    )
  }
}
