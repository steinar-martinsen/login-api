let dataBaseContent = '';

getDatabase();
function getDatabase() {
    fetch('https://ho1-login-api.herokuapp.com/login-credential')
        .then(response => response.json())
        .then(data => {
            dataBaseContent = data;
    });
}

validateLogin();
function validateLogin(request) {
    return new Promise((resolve, reject) => {
        // wrap in timeout to simulate server api call
        setTimeout(() => {

            let params = JSON.parse(request.body);
            let filteredUsers = users.filter(user => {
                return (user.username === params.username || user.email === params.username) && user.password === params.password;
            });

            if (filteredUsers.length) {
                // if login details are valid return user details and jwt token
                let user = filteredUsers[0];
                let responseJson = {
                    id: user.id,
                    username: user.username,
                    email: user.email,
                    token: Math.random(0, 100000000000000)
                };
                resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(responseJson)) });
            } else {
                // else return error
                reject('Username or password is incorrect');
            }
            return;
        }, 500);
    });
}