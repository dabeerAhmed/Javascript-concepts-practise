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