import React, {Component} from 'react'


export default class Users extends Component {

  constructor(props) {
    super(props);
    this.state = {
    users: []
  }

  //this.submit = this.submit.bind(this)
  }


  componentDidMount() {

    return fetch('https://apex.oracle.com/pls/apex/myfusion/react/users/')
          .then(response =>
            response.text()
          )
          .then(data => this.setState({users: JSON.parse(data).items}))
  }

  render () {

    let obj = this.state
    console.log(obj)


    return (
      <div>
      <ul>
      {obj.users.map(user => (
        <li key={user.id}>{user.name}</li>

        ))}
      </ul>
      </div>
      )
  }




}