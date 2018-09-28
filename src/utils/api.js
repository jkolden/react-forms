
export function receiveUsersAsync() {
    return fetch('https://apex.oracle.com/pls/apex/myfusion/react/users/')
          .then(response => response.json())
}

export function saveUserAPI(userData) {
  return fetch("https://apex.oracle.com/pls/apex/myfusion/react/users/", {
    method: "POST",
    body: JSON.stringify(userData),
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => response.json())
}

export function deleteUserAPI(id) {

  return fetch("https://apex.oracle.com/pls/apex/myfusion/react/users/", {
      method: "DELETE",
      headers: {
        id: id
      }
    })
}

export function updateUserAPI(userData) {

  return fetch("https://apex.oracle.com/pls/apex/myfusion/react/users/", {
      method: "PUT",
      body: JSON.stringify(userData),
      headers: {
        "Content-Type": "application/json",
        id: userData.id
      }
    })
    .then(response => response.json())
}






