import React from 'react'
import { shallow, mount } from 'enzyme'
import Login from './index'
describe('Login component', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(<Login />)
  })
  it('Render login component', () => {
    expect(mount(<Login />).find(Login)).toHaveLength(1)
  })
  it('Login component content className Login', () => {
    expect(wrapper.is('.Login')).toBe(true)
  })

  it('Login component content form Login', () => {
    expect(wrapper.find('LoginForm')).toHaveLength(1)
  })
})
