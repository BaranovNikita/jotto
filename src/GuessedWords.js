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
  } else {
    contents = (
      <div data-test='guessed-words'>
        <h3>Words</h3>
        <table>
          <thead>
            <tr>
              <th>Guess</th>
              <th>Matching Letters</th>
            </tr>
          </thead>
          <tbody>
          {props.guessedWords.map((gw, idx) => (
            <tr data-test='guessed-word' key={idx}>
              <td>{gw.guessedWord}</td>
              <td>{gw.letterMatchCount}</td>
            </tr>
          ))}
          </tbody>
        </table>

      </div>
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
