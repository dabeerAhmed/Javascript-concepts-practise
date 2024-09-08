// // for of

// //  ["","",""]
// //  [{},{},{}]


let arr = [1,2,3,4,5]
for(const number of arr){
    // console.log(number)
}

let grettings = 'Hello World!'
for(const greet of grettings){
    // console.log(greet)
}
for(const greet of grettings){
    if (greet == " ") {
        // console.log('space detected')
        break
    }
    // console.log(greet)
}
for(const greet of grettings){
    if (greet == " ") {
        // console.log('space detected')
        continue
    }
    // console.log(greet)
}


// Map

const map = new Map()
map.set('Pk', "Pakistan")
map.set('In', "India")
map.set('Fr', "France")
// console.log(map)

for(const key of map){
    // console.log(key)
}

for(const [key, value] of map){
    // console.log(key, ":-", value)
}

const myObject = {
    game1 : 'NFR',
    game2 : 'Spiderman'
}
for(const [key,value] of myObject){
    // console.log(key, ":-", value)  //it will provide an error
}