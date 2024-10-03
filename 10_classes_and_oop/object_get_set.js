const User = {
    _email: "dabeer@db.com",
    _password: "dbrs",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    },
    get password(){
        return this._password.toUpperCase()
    },
    set password(value){
        this._password = value
    }
}

const createUser = Object.create(User)
console.log(createUser.email)
console.log(createUser.password)