class user {
    constructor(username){
        this.username = username
    }
    logMe(){
        console.log(`${this.username} just logged in`)
    }
    static createId(){
        return '123'
    }
}

const createUserOne = new user("Dabeer Ahmed")
createUserOne.logMe()  //Answer => Dabeer Ahmed just logged in
// console.log(createUserOne.createId())  //Answer => createUserOne.createId is not a function (this error is occured because we have used static with createId method and static then doesnot allow the access to that method)


class Teacher extends user{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const createUserTwo = new Teacher("areeb", 124)
createUserTwo.logMe()
// console.log(createUserTwo.createId())  //Answer => createUserOne.createId is not a function (this error is occured because we have used static with createId method and static then doesnot allow the access to that method)