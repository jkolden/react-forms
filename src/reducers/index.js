import { SAVE_USER, RECEIVE_USERS, UPDATE_USER, DELETE_USER } from '../actions'
import { combineReducers } from 'redux'


function users(state = [], action) {

  switch (action.type) {
    case SAVE_USER:
      return state.concat([action.user])

    case RECEIVE_USERS:
     return action.users

    case DELETE_USER:
      return state.filter((item) => item.id !== action.user.id)

    case UPDATE_USER:
      const filteredUsers = state.filter((item) => item.id !== action.user.id)
      return filteredUsers.concat([action.user])

    default:
      return state
  }
}

function loading(state = true, action) {
  switch(action.type) {

    case RECEIVE_USERS:
      return false
    default:
      return state
  }


}

export default combineReducers({
  loading,
  users,

})


