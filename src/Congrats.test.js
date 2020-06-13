import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import { findByDataTestAttribute } from '../test/testUtils'

import { Congrats } from './Congrats'

Enzyme.configure({ adapter: new EnzymeAdapter() })

/**
 * Factory function to create a ShallowWrapper for the Congrats component
 * @function setup
 * @param {object} props - Component props
 * @returns {ShallowWrapper}
 */
const setup = (props = {}) => {
  return shallow(<Congrats {...props} />)
}

test('renders without errors', () => {
  const wrapper = setup()
  const component = findByDataTestAttribute(wrapper, 'component-congrats')
  expect(component.length).toBe(1)
})

test('renders no text when `success` prop is false', () => {
  const wrapper = setup({ success: false })
  const component = findByDataTestAttribute(wrapper, 'component-congrats')
  expect(component.text()).toBe('')
})

test('renders non-empty congrats message when `success` prop is true', () => {
  const wrapper = setup({ success: false })
  const message = findByDataTestAttribute(wrapper, 'congrats-message')
  expect(message.text().length).not.toBe(0)
})
