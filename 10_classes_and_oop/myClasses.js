class user {
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const createUser = new user('dabeer', 'dabeer@db.com', 123)
console.log(createUser)
console.log(createUser.encryptPassword())
console.log(createUser.changeUsername())


// behind the scene of above code snippet

function userTwo(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

userTwo.prototype.encryptPassword = function(){
    return `${this.password}abcd`
}
userTwo.prototype.changeUsername = function(){
    return `${this.username.toUpperCase()}`
}

const createUser2 = new userTwo('ahmed', 'ahmed@db.com', 343)
console.log(createUser2)
console.log(createUser2.encryptPassword())
console.log(createUser2.changeUsername())