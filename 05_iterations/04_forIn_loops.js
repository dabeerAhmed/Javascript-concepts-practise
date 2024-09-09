const myObject={
    js:'javascript', 
    cpp:'c++',
    rp:'ruby',
    swift:'swift by apple'
} 

for (const key in myObject){
    // console.log(key)
}

for (const key in myObject){
    // console.log(myObject[key])
}

for (const key in myObject){
    // console.log(`${key} is for ${myObject[key]}`)
}

const programming = ["js", "c++", "ruby", "java"]

for(const key in programming){
    // console.log(key)
}

for(const key in programming){
    // console.log(programming[key])
}

const map = new Map()
map.set('Pk','Pakistan')
map.set('In','India')
map.set('Fr','France')

for(const key in map){
    // console.log(key)  //maps is not iterable
}