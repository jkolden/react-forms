export const SAVE_USER = 'SAVE_USER'
export const RECEIVE_USERS = 'RECEIVE_USERS'

export function saveUser(user) {
  return {
    type: SAVE_USER,
    user
  }
}

export function receiveUsers(users) {
  return {
  type: RECEIVE_USERS,
  users
}

}