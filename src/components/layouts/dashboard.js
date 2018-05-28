import React, { Component } from 'react'
import Login from '../../containers/login'
import Appointment from '../../containers/appointment'
import { checkIfUserIsLogged, readTokenFromStorage } from '../../helpers/auth'
import ErrorBoundary from '../error/error'

export default class Dashboard extends Component {
  render () {
    const { token } = this.props
    const checkUser =
      (token &&
        typeof token !== 'undefined' &&
        token === readTokenFromStorage() &&
        checkIfUserIsLogged()) ||
      checkIfUserIsLogged()
    return (
      <section>
        {!checkUser
          ? <ErrorBoundary><Login /></ErrorBoundary>
          : <Appointment />}
      </section>
    )
  }
}
