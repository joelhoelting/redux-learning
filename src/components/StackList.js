import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { setStack, loadStacks } from '../redux/actions';
import stacks from '../data/stacks.json';

class StackList extends Component {
  componentDidMount() {
    if (this.props.stacks.length === 0) {
      this.props.loadStacks(stacks);
    }
  }

  render() {
    return (
      <div>
        {this.props.stacks.map(stack => (
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

function mapStateToProps(state) {
  return { stacks: state.stacks }
}

export default connect(
  mapStateToProps,
  { setStack, loadStacks }
)(StackList);

// export default connect(
//   null,
//   { toggleTodo }
// )(Todo);
