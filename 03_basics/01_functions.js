function sayMyName(){
    console.log("D")
    console.log("A")
    console.log("B")
    console.log("E")
    console.log("E")
    console.log("R")
}
// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2)
// }

// function addTwoNumbers(number1, number2){
//     const result = number1 + number2
//     return result
// }

// function addTwoNumbers(number1, number2){
//     return number1+number2
// }
// const result = addTwoNumbers(3,6)
// console.log("result : ", result)

function loginUserMsg(username = "abc"){
    if(!username){
        console.log("please enter a username")
        return
    }
    return `${username}, just logged in`
}
// console.log(loginUserMsg("Dabeer Ahmed"));  //dabeer ahmed just logged in
// console.log(loginUserMsg());  //undefined just logged in



function calculateCartPrice(val1, val2, ...num1){
    return num1
}
// console.log(calculateCartPrice(200,400,600,2000,6000))


const user = {
    username: "dabeer ahmed",
    price: 2999
}

function handleObject(anyObject){
    return `Username is ${anyObject.username} and price is ${anyObject.price}`
}
// console.log(handleObject(user))

// console.log(handleObject({
//     username: "abc",
//     price: 65}))


const myNewArray = [200,440,600,800]

function returnSecondValue(getArray){
    return getArray[1]
}
// console.log(returnSecondValue(myNewArray))
// console.log(returnSecondValue([100,200,300,400]))