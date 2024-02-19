// for of

//  ["","",""]
//  [{},{},{}]

const arr = [1,2,3,4,5]
for (const i of arr) {
    console.log(i);   
}

const greetings = "hello world"
for(const greet of greetings){
    if(greet == " "){
        continue
    }
    // console.log(`each character is ${greet}`)
}


// map

const map = new Map()
map.set('Pk',"Pakistan")
map.set('In','India')
map.set('Fr',"France")
map.set('Pk','Pakistan')
// console.log(map)


for(const key of map){
    // console.log(key)
}


for(const [key, value] of map){
    // console.log(key,':-', value)
}



const myObj = {
    game1: "nfs",
    game2: "spiderman"
}

// for (const [key,value] of myObj){
//     console.log(key,value)
// }

