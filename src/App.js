import React, { Component } from 'react'
import './App.css'
import { Route } from 'react-router-dom'
import UsersRedux from './components/UsersRedux'
import FormContainer from './containers/FormContainer'
import reducer from './reducers'
import middleware from './middleware'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { receiveUsers } from './actions'
import { receiveUsersAsync } from './utils/api'

class App extends Component {

  render() {

    const store = createStore(reducer, middleware)

      receiveUsersAsync()
      .then((data) => store.dispatch(receiveUsers(data)))

    return (
      <Provider store={store}>
      <div>
      <Route exact path = '/' component={() => (<UsersRedux />)} />
      <Route path = '/create/' render={() => (<FormContainer />)} />
      </div>

      </Provider>
    );
  }
}

export default App;
