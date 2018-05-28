import React from 'react'
import { shallow, mount } from 'enzyme'
import { LoginForm } from './login-form'
describe('LoginForm component', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(
      <LoginForm className='LoginForm' onHandleChange={jest.fn()} />
    )
  })
  it('Render login form component', () => {
    expect(wrapper.find(LoginForm)).toHaveLength(1)
  })
  it('LoginForm component content className LoginForm', () => {
    expect(wrapper.is('.LoginForm')).toBe(true)
  })
})
