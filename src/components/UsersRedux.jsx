import React, { Component } from "react"
import { connect } from "react-redux"
import { Link } from 'react-router-dom'

class UsersRedux extends Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.state.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
        <Link
        to='/create'>
        Add Contact
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);

  return {
    state
  };
}

export default connect(mapStateToProps)(UsersRedux);