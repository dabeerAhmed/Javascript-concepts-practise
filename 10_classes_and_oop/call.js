function setUsername(username){
    //complex db calls
    this.username = username
    console.log("called")
}

function createUser(username, email, password){
    setUsername.call(this,username)
    this.email = email
    this.password = password
}

const creatingUser = new createUser("dabeer ahmed", "dabeer@db.com", 12345)

console.log(creatingUser);