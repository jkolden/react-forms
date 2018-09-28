import { deleteUserAPI, updateUserAPI, saveUserAPI } from '../utils/api'

export const SAVE_USER = 'SAVE_USER'
export const RECEIVE_USERS = 'RECEIVE_USERS'
export const UPDATE_USER = 'UPDATE_USER'
export const DELETE_USER = 'DELETE_USER'


export function handleSaveUser(user, cb) {

  return (dispatch) => {
    return saveUserAPI(user)
    .then(response => dispatch(saveUser(response)))
    cb.map(func => func())
  }
}


export function saveUser(user) {
  //put my API code here so that the action gets the info that the reducer needs
  return {
    type: SAVE_USER,
    user
  }
}

export function handleUpdateUser(user) {

  return (dispatch) => {
    return updateUserAPI(user)
    .then(dispatch(updateUser(user)))

  }
}

function updateUser(user) {
  //put my API code here so that the action gets the info that the reducer needs
  return {
    type: UPDATE_USER,
    user
  }
}

export function handleDeleteUser(user) {
  return (dispatch) => {
    return deleteUserAPI(user.id)
    .then(dispatch(deleteUser(user)))
  }
}

function deleteUser(user) {
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