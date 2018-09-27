import React, { Component } from "react";
import { connect } from "react-redux";
import Input from "./Input";
import Button from "./Button";
import { updateUser, deleteUser } from "../actions";
import { Redirect } from 'react-router-dom'


class PersonPage extends Component {
  constructor(props) {
    super(props);

    const { user } = this.props;

    this.state = {
      User: {
        id: user[0].id,
        name: user[0].name,
        age: user[0].age,
        gender: user[0].gender,
        skills: [...user[0].skills],
        about: user[0].about
      },
      toHome: false,

      genderOptions: ["Male", "Female", "Others"],
      skillOptions: ["Programming", "Development", "Design", "Testing"]
    };

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput = e => {
    let value = e.target.value;
    let name = e.target.name;
    this.setState(
      prevState => ({
        User: {
          ...prevState.User,
          [name]: value
        }
      }),
      () => console.log(this.state.User)
    );
  };

  handleFormSubmit = e => {
    e.preventDefault();
    let userData = this.state.User;

    fetch("https://apex.oracle.com/pls/apex/myfusion/react/users/", {
      method: "PUT",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
        id: this.state.User.id
      }
    }).then(response => {
      response.json().then(data => {
        this.props.dispatch(updateUser(data));
        this.setState(() => ({
          toHome: true
        }));
      });
    });
  };

  handleDelete = e => {
    e.preventDefault();

    fetch("https://apex.oracle.com/pls/apex/myfusion/react/users/", {
      method: "DELETE",
      headers: {
        id: this.state.User.id
      }
    })
    .then(this.props.dispatch(deleteUser(this.state.User)))
    .then(this.setState(() => ({
          toHome: true
        }))
    )
  };

  render() {
    const { user } = this.props;

    if (this.state.toHome === true) {
      return <Redirect to='/' />
    }

    return (
      <div style={{ margin: 20 }}>
        <Input
          inputtype={"text"}
          title={"Full Name"}
          name={"name"}
          value={this.state.User.name}
          placeholder={user[0].name}
          handlechange={this.handleInput}
        />{" "}
        {/* Name of the user */}
        <div>{user[0].about}</div>
        <div>{user[0].age}</div>
        <div>{user[0].gender}</div>
        <h3>Skills:</h3>
        {user[0].skills.map(skill => (
          <div key={skill}>{skill}</div>
        ))}
        <Button
          action={this.handleFormSubmit}
          type={"primary"}
          title={"Update"}
        />
        <Button style={{margin: 5}}
          action={this.handleDelete}
          type={"primary"}
          title={"Delete"}
        />
        {/*Submit */}
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  const id = props.match.params.id;

  const { users } = state;

  const user = users.filter(obj => {
    return obj.id == id;
  });

  return {
    user
  };
}

export default connect(mapStateToProps)(PersonPage);
