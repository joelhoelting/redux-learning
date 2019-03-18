import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setStack } from '../redux/actions';
import stacks from '../data/stacks.json';

class StackList extends Component {
  render() {
    
    
    return (
      <div>
        {stacks.map(stack => (
          <Link 
            to='/stack' 
            onClick={() => this.props.setStack(stack)}
          >
            <h4 key={stack.id}>{stack.title}</h4>
          </Link>
        ))}
      </div>
    )
  }
}

export default connect(
  null,
  { setStack }
)(StackList);

// export default connect(
//   null,
//   { toggleTodo }
// )(Todo);
