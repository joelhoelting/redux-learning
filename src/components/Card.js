import React, { Component } from 'react';

class Card extends Component {
  render() {
    const { prompt, answer } = this.props.card;
    return (
      <div>
        <div><h4>{this.props.card.prompt}</h4></div>
        <div>{this.props.card.answer}</div>
      </div>
    );
  }
}

export default Card;