export const SAVE_USER = 'SAVE_USER'
export const RECEIVE_USERS = 'RECEIVE_USERS'
export const UPDATE_USER = 'UPDATE_USER'
export const DELETE_USER = 'DELETE_USER'



export function saveUser(user) {
  //put my API code here so that the action gets the info that the reducer needs
  return {
    type: SAVE_USER,
    user
  }
}

export function updateUser(user) {
  //put my API code here so that the action gets the info that the reducer needs
  return {
    type: UPDATE_USER,
    user
  }
}

export function handleDeleteUser(user) {
  return (dispatch) => {
    dispatch(deleteUser(user))


  }


}

export function deleteUser(user) {
  //put my API code here so that the action gets the info that the reducer needs
  return {
    type: DELETE_USER,
    user
  }
}

export function receiveUsers(users) {
  return {
  type: RECEIVE_USERS,
  users
}

}