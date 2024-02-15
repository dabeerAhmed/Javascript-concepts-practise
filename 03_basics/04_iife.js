// Immediately invoked function expression

(function connected(){
    console.log("DB CONNECTED")
})();


( (name) => {
    console.log(`DB CONNECTED TWO ${name}`)
})("dabeer")


// It is important to end the iife function with a semicolon otherwise it will through an error when running another iife function. Moreover the iife functio which contains names are known as named iife and the function which does not contains names i.e. arrow functions are simple iife. iife function is basically used to immediately invok a function and tou avoid this function from global variable pollution.