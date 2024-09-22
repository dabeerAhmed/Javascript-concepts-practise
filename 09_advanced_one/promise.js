const promiseOne = new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("Async task one completed")
        resolve()
    },1000)
})
promiseOne.then(function(){
    console.log("Async one resolved")
})


new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Async task two completed")
        resolve()
    },2000)
}).then(() => {
    console.log("Async two resolved")
})


const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({username: "Dabeer Ahmed", email: "dabeer@dabeer.com"})
    }, 3000)
})
promiseThree.then(function(user){
    console.log(user)
})


const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username:"ahmed", password:"123"})
        } else{
            reject("Error: Something went wrong")
        }
    },4000)
})
promiseFour.then(function(user){
    console.log(user)
    return user.username
}).then(function (username) {
    console.log(username)
}).catch(function(err){
    console.log(err)
}).finally(() => console.log("The promise is either resolved or rejected"))


const promiseFive = new Promise(function(resolve, reject){
    let error = true
    setTimeout(function(){
        if (!error) {
            resolve({course: "Javascript", price:"699"})
        }else{
            reject('Error: Something went wrong')
        }
    },5000)
})
async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}
consumePromiseFive()