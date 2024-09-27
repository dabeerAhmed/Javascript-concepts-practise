function multiplyBy5(num){
    return num*5
}
multiplyBy5.power = 3
// console.log(multiplyBy5(5))
// console.log(multiplyBy5.power)
// console.log(multiplyBy5.prototype)




function createUser(username, score){
    this.username = username
    this.score = score
}

createUser.prototype.increament = function(){
    console.log(this.score++)
}

createUser.prototype.print = function(){
    console.log(`Score is ${this.score}`)
}

const first = new createUser('dabeer', 45)
const second = createUser('ahmed', 50)
first.print()

/*
Here is what happens behind the scenes when new keyword is used:

A new object is created: The new keyword initiates the creation of a new javascript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor
function. This means it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with specified arguments and this is bound
to newly created object. If no explicit return value is specified from the constructor, javascript 
assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesnot return
a non-primtive value (array, object, function etc), the newly created object is returned.

*/