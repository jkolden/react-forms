import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Divider, List, Button, Header } from "semantic-ui-react";
import NavBar from '../layout/NavBar'

class UsersRedux extends Component {
  render() {
    return (
      <div style={{ margin: 20 }}>
      <NavBar />
        <Header as="h1" textAlign="center">
          People
        </Header>
        <List divided>
          {this.props.users
            .sort(function(a, b) {
              return b.id - a.id;
            })
            .map(user => (
              <List.Item key={user.id}>
                <List.Content>
                  <List.Header>
                    <Link to={"/person/" + user.id}>{user.name}</Link>
                  </List.Header>
                </List.Content>
              </List.Item>
            ))}
        </List>
        <Divider />
        <Link to="/create">
          <Button>Add Contact</Button>
        </Link>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { users } = state;

  return {
    users
  };
}

export default connect(mapStateToProps)(UsersRedux);
