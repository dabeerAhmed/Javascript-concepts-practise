// singleton
// object.create       /object through constructor

//object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "dabeer",
    "full name": "Dabeer Ahmed", //when this type of object is declared then it cannot be called with (.full name) but it can only be called with ["full name"] 
    age: 22,
    [mySym]: "mykey1",
    email: "dabeer@gmail.com",
    isLoggedIn: false,
    lastLogInDays : ["Monday", "Saturday"],
}

// console.log(JsUser.email);
// console.log(JsUser["age"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

JsUser.email = "dabeerdb@gmail.com"
// Object.freeze(JsUser)   // no values can be changed after freeze
JsUser.email = "dabeerdbbbb@gmail.com"
// console.log(JsUser)

JsUser.greetings = function(){
    console.log("Hello Js User")
}
JsUser.greetingsTwo = function(){
    console.log(`Hello JS user ${this.name}`)
}
// console.log(JsUser.greetings())
// console.log(JsUser.greetingsTwo())
// console.log(JsUser)