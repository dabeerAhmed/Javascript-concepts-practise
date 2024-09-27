function multiplyBy5(num){
    return num*5
}
multiplyBy5.power = 3
console.log(multiplyBy5(5))
console.log(multiplyBy5.power)
console.log(multiplyBy5.prototype)


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
