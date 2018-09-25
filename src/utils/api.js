

export function receiveUsersAsync() {
    return fetch('https://apex.oracle.com/pls/apex/myfusion/react/users/')
          .then(response =>
            response.json())
          .then(data => data)
}


export function saveUser(userData) {

  fetch('https://apex.oracle.com/pls/apex/myfusion/react/new/',{
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          'Content-Type': 'application/json'
        },
      }).then(response => {
        response.json().then(data =>{
          return data.items

        })
    })
}