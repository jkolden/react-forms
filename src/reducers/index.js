import { SAVE_USER, RECEIVE_USERS } from '../actions'


function users(state = [], action) {

  switch (action.type) {
    case SAVE_USER:
      return state.concat([action.user])

    case RECEIVE_USERS:
     return action.users

    default:
      return state
  }
}

 export default users