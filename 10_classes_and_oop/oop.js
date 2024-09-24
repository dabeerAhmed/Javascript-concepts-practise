// Object Literals

const user = {
    username: "dabeer ahmed",
    loginCount: 10,
    signedIn: true,
    
    getUserDetails: function(){
        console.log("Got user details");
        console.log(`Username: ${this.username}`)
        console.log(this)
    }
}
// console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this)




// Constructor

function myUser(username, loginCount, isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome: ${this.username}`)
    }

    return this   // This is not important to return "this" like this because it automatically returns it implicitly
}

const userOne = new myUser('dabeer', 10, true)
const userTwo = new myUser('ahmed', 15, false)
console.log(userOne.constructor)  
console.log(userTwo)

// "New" is an constructor function, whenever we user new keywork it will create an empty object. In the above code snippet we have used "new" keyword because if we donot use it then it will override the values of userOne with userTwo. So it is important to explicitly write new keyword.
