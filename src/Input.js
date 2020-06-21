import React from 'react'
import * as PropTypes from 'prop-types'

export const Input = (props) => {
  const [currentGuess, setCurrentGuess] = React.useState('')

  return (
    <div data-test='component-input'>
      <form className='form-inline'>
        <input
          data-test='input-box'
          className='mb-2 mx-sm-3'
          type='text'
          placeholder='enter guess'
          value={currentGuess}
          onChange={e => setCurrentGuess(e.target.value)}
        />
        <button
          data-test='submit-button'
          onClick={evt => { evt.preventDefault() }}
          className='btn btn-primary mb-2'
          type='submit'
        >
          Submit
        </button>
      </form>
    </div>
  )
}

Input.propTypes = {
  secretWord: PropTypes.string.isRequired
}
