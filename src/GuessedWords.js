import React from 'react'
import * as PropTypes from 'prop-types'

export const GuessedWords = (props) => {
  let contents = null
  if (!props.guessedWords.length) {
    contents = (
      <span data-test='guessed-words-instructions'>
        Try to guess the secret word!
      </span>
    )
  }
  return (
    <div data-test='component-guessed-words'>
      { contents }
    </div>
  )
}

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(PropTypes.shape({
    guessedWord: PropTypes.string,
    letterMatchCount: PropTypes.number
  })).isRequired
}
