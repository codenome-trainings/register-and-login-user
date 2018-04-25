class User {
    
    constructor (username, password) {
        this.username = username
        this.password = password
        this.users = [
            { username: 'grupocodenome', password: '123' },
            { username: 'thiagocunha', password: '321' },
            { username: 'thalita', password: 'qwe' },
            { username: 'caroline', password: 'ewq' },
            { username: 'luciana', password: 'asd' },
        ]
    }

    login(user) {
        const foundUser = this.users.filter( registeredUser => 
            registeredUser.username === user.username && registeredUser.password === user.password
        )[0]  
        if (foundUser) {
            return {
                message: 'Login is successful',
                status: true
            }
        }
        return {
            message: 'Invalid username or password',
            status: false
        }
    }

    addUser(user) {
        const foundUser = this.users.filter(registeredUser => registeredUser.username === user.username)[0];
        if (foundUser) {
            return {
                message: 'This User exist',
                status: false
            }
        } else {
            this.users.push(user)
            return {
                message: 'User registred with successful',
                status: true
            }
        }
    }
}

function signin() {

    let username = document.getElementById('inputUsername').value
    let password = document.getElementById('inputPassword').value
    let message = document.getElementById('message')

    let user = new User (username, password)
    let result = user.login(user)

    if ( result.status === true ) {
        message.className = 'alert alert-success'
        message.innerText = result.message.toString()
    } else {
        message.className = 'alert alert-danger'
        message.innerText = result.message.toString()
    }
    
}

function signup() {
    let username = document.getElementById('inputUsername').value
    let confirmPassword = document.getElementById('confirmPassword').value
    let password = document.getElementById('inputPassword').value
    let message = document.getElementById('message')

    const equalPassword = ( password, confirmPassword ) => password === confirmPassword

    if (!equalPassword(password, confirmPassword)) {
        message.innerText = 'Your password is not the same'
        message.setAttribute('class', 'alert alert-danger')
        return
    }

    let user = new User (username, password)
    let result = user.addUser(user)

    if (result.status) {
        message.innerText = result.message.toString()
        message.setAttribute('class', 'alert alert-success')
    } else {
        message.innerText = result.message.toString()
        message.setAttribute('class', 'alert alert-danger')
    }
}