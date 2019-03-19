import React, { Component } from 'react'
import StackList from './StackList';
import '../index.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Flashcard Pro</h1>
        <StackList />
      </div>
    )
  }
}
