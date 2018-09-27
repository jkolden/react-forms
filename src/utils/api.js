


export function receiveUsersAsync() {
    return fetch('https://apex.oracle.com/pls/apex/myfusion/react/users/')
          .then(response =>
            response.json())
          .then(data => data)
}




