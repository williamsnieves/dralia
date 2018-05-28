import React from 'react'
import { shallow, mount } from 'enzyme'
import Appointment from './index'
describe('Appointment component', () => {
  let wrapper
  beforeEach(() => {
    wrapper = mount(<Appointment getSlots={jest.fn()} />)
  })
  it('Render appointment component', () => {
    expect(wrapper.find(Appointment)).toHaveLength(1)
  })
})
