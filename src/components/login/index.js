import React, { Component } from 'react'
import './small.scss'
import { Logo } from './logo'
import { LoginForm } from './login-form'

export default class Login extends Component {
  componentDidMount () {
    if (this.props.error) {
      throw new Error(this.props.error)
    }
  }
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange (event) {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleSubmit (event) {
    const { email, password } = this.state
    event.preventDefault()
    this.props.fetchLogin(email, password)
  }
  render () {
    return (
      <section className='Login'>
        <Logo className='Login__logo' />
        <p className='Login__title'>Sign in to your account</p>
        <LoginForm
          className='Login__data'
          onHandleChange={event => this.handleChange(event)}
          onSubmit={event => this.handleSubmit(event)}
        />
      </section>
    )
  }
}
