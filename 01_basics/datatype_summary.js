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

let myObject = {
    name : 'dabeer',
    age: 22
}

const myFunction = function(){
    console.log("Hello World")
}

console.log(typeof bigNumber);  // This is how you can check the types of data


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