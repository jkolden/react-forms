import React, { Component } from 'react'
import './App.css'
import { BrowserRouter, Route } from 'react-router-dom'
import UsersRedux from './components/UsersRedux'
import PersonPage from './components/PersonPage'
import FormContainer from './containers/FormContainer'
import { receiveUsers } from './actions'
import { receiveUsersAsync } from './utils/api'
import { connect } from 'react-redux'
import { Login, SignUp } from './modules/auth'


class App extends Component {

  componentDidMount() {


    receiveUsersAsync()
      .then((data) => this.props.dispatch(receiveUsers(data)))
  }

  render() {

    const store = this.props

    const { loading } = store


    if (loading === true) {

      return <h3>Loading...</h3>

    }


    return (
      <BrowserRouter>
      <div>
      <Route exact path = '/' render={() => (<UsersRedux />)} />
      <Route path = '/create/' render={() => (<FormContainer />)} />
      <Route path = "/person/:id" component={PersonPage} />
      <Route path = "/login" component={Login}/>
      <Route path = "/signup" component={SignUp}/>
      </div>
      </BrowserRouter>
    );
  }
}

function mapStateToProps(state) {
  return state
}

export default connect(mapStateToProps)(App);
