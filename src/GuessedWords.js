import React from 'react'
import * as PropTypes from 'prop-types'

export const GuessedWords = (props) => {
  return (
    <div />
  )
}

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(PropTypes.shape({
    guessedWord: PropTypes.string,
    letterMatchCount: PropTypes.number
  })).isRequired
}
