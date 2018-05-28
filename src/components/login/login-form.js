import React from 'react'

export const LoginForm = ({ className, onHandleChange, onSubmit }) => {
  return (
    <section className={className}>
      <form className='Login__form' onSubmit={event => onSubmit(event)}>
        <input
          className='Login__input'
          type='text'
          name='email'
          placeholder='Email'
          onChange={event => onHandleChange(event)}
        />
        <input
          className='Login__input'
          type='password'
          name='password'
          placeholder='Password'
          onChange={event => onHandleChange(event)}
        />
      </form>
      <button className='Login__button' onClick={event => onSubmit(event)}>
        Sign in
      </button>
      <a className='Login__forgot-password' href=''>
        Forgot your password ?
      </a>
    </section>
  )
}
