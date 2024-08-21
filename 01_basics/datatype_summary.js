// Primitive
// string, number, boolean, null, undefined, bigInt, symbol

const name = "Dabeer Ahmed"
const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;
const bigNumber = 276582758237654332n
const id = Symbol('123')
const anotherId = Symbol('123')
// console.log(id === anotherId)


// Reference (Non-Primitive)
// arrays, objects, functions

const names = ["dabeer", "ali", "rafiq"]
// console.log(typeof names)
let myObject = {
    name : 'dabeer',
    age: 22
}

const myFunction = function(){
    console.log("Hello World")
}

// console.log(typeof bigNumber);  // This is how you can check the types of data


// Return type of variables in JavaScript
// 1) Primitive Datatypes
    //    Number => number
    //    String  => string
    //    Boolean  => boolean
    //    null  => object
    //    undefined  =>  undefined
    //    Symbol  =>  symbol
    //    BigInt  =>  bigint

// 2) Non-primitive Datatypes
    //    Arrays  =>  object
    //    Function  =>  function
    //    Object  =>  object

// +++++++++++++++++++++++++++++++++Stack And Heap Memory++++++++++++++++++++++++++++++++++++++++++++++++

// Stack (Primitive datatypes) Heap (Non primitive)
// Stack memory provides a copy 
// Heap memory provides the reference  
let Name = "Dabeer"
let anotherName = Name
anotherName = "Ahmed"
// console.log(Name);
// console.log(anotherName)


let userOne = {
    email: "user@gmail.com",
    ph: 123456789
}

let userTwo = userOne

userTwo.email = "dabeer@gmail.com"
// console.log(userOne)
// console.log(userTwo)