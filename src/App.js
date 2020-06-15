import React, { Component } from 'react';
import './App.css';

import { GuessedWords } from './GuessedWords'
import { Congrats } from './Congrats'

export class App {
  render () {
    return (
      <div className='container'>
        <h1>Jotto</h1>
        <Congrats success={false} />
        <GuessedWords guessedWords={[]} />
      </div>
    )
  }
}
