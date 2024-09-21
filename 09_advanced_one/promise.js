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