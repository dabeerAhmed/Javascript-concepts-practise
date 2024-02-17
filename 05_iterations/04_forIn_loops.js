const myObject={
    js:'javascript',
    cpp:'c++',
    rp:'ruby',
    swift:'swift by apple'
}

for(const key in myObject){
    // console.log(`${key} is the shortcut of ${myObject[key]}`)
}

const programming = [ "js", "ruby", "java", "cpp"]
for (const key in programming){
    // console.log(`${key} is for ${programming[key]}`)
}



const map = new Map()
map.set('Pk',"Pakistan")
map.set('In','India')
map.set('Fr',"France")
map.set('Pk','Pakistan')
for(const key in map){
    // console.log(key)
}
