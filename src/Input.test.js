import React from 'react'
import { shallow } from 'enzyme'

import { findByDataTestAttribute, checkProps } from '../test/testUtils'
import { Input } from './Input'

const setup = (secretWord='party') => {
  return shallow(<Input secretWord={secretWord} />)
}

test('input renders without errors', () => {
  const wrapper = setup()
  const inputComponent = findByDataTestAttribute(wrapper, 'component-input')
  expect(inputComponent.length).toBe(1)
})

test('does not throw warning with expected props', () => {
  checkProps(Input, { secretWord: 'party' })
})

describe('state controlled input field', () => {
  test('state updates with value of input box upon change', () => {
    const mockSetCurrentGuess = jest.fn()
    React.useState = jest.fn(() => ['', mockSetCurrentGuess])

    const wrapper = setup()
    const inputBox = findByDataTestAttribute(wrapper, 'input-box')

    const mockEvent = { target: { value: 'train' } }
    inputBox.simulate('change', mockEvent)

    expect(mockSetCurrentGuess).toHaveBeenCalledWith('train')
  })
})
