const user = {
    name: "Dabeer Ahmed",
    price: 999,

    welcomeMsg: function(){
        console.log(`${this.name}, welcome to the website`);
        console.log(this);
    }
}
// user.welcomeMsg()
// user.name = "abc"
// user.welcomeMsg()
// console.log(this)


// function one(){
//     const username = "dabeer"
//     console.log(this.username)
// }
// one()


// const one = function(){
//     const username = "dabeer"
//     console.log(this.username)
// }
// one()


// const one = () => {
//     let username="dabeer"
//     console.log(this.username);
// }
// one()

// const addTwo = (num1,num2) => {
//     return num1+num2
// }
// console.log(addTwo(6,6));


// const addTwo = (num1,num2) => num1+num2
// console.log(addTwo(6,4))

// const addTwo = (num1,num2) => (num1+num2)
// console.log(addTwo(6,4))

// const addTwo = (num1,num2) => ({username:"dabeer"})
// console.log(addTwo(7,7))