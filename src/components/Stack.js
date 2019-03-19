import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Card from './Card';

class Stack extends Component {
  render() {
    const { stack } = this.props;
    return (
      <div>
        <Link to='/'>Home</Link>
        <h3>{stack.title}</h3>
        { stack.cards.map(card => <Card key={card.id} card={card} />)}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { stack: state.stack }
}

export default connect(
  mapStateToProps,
  null
)(Stack);