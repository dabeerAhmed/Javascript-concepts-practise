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
    },2000)
    resolve()
}).then(function(){
    console.log("Async two resolved")
})