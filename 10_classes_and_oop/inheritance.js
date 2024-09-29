class user {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username is ${this.username}`)
    }
}

class Teacher extends user{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username} whose email is ${this.email}`)
    }
}

const teacherOne = new Teacher('dabeer', 'dabeer@db.com', 124)
teacherOne.addCourse()  //Answer => A new course was added by dabeer whose email is dabeer@db.com
teacherOne.logMe()  //Answer => Username is dabeer

const student = new user("Areeb")
student.logMe()  //Answer => Username is Areeb
// student.addCourse()  //Error => because user class doesnot have access to teacher class

console.log(teacherOne instanceof Teacher)  //true
console.log(teacherOne instanceof user)  //true
console.log(student instanceof user)  //true
console.log(student instanceof Teacher)  //false