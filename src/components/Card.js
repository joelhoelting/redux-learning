import React, { Component } from 'react';

class Card extends Component {
<<<<<<< HEAD
  render() {
    const { prompt, answer } = this.props.card;
    return (
      <div>
        <div><h4>{this.props.card.prompt}</h4></div>
        <div>{this.props.card.answer}</div>
      </div>
    );
=======
  constructor() {
    super();

    this.state = { reveal: false };
  }

  render() {
    const { prompt, answer } = this.props.card;

    return (
      <div className='card' onClick={() => this.setState({ reveal: true })}>
        <div className='card-prompt'>
          <h4>{prompt}</h4>
        </div>
        <div className='card-answer'>
          <h4 className={this.state.reveal ? 'text-revealed' : 'text-hidden'}>
            {answer}
          </h4>
        </div>
      </div>
    )
>>>>>>> 04c367ee9ca2a3aa3fb1d297ba4cd7d6473bf498
  }
}

export default Card;