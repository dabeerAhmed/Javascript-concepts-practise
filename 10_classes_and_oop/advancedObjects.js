const descriptor = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descriptor)

// console.log(Math.PI)
// Math.PI = 5
// console.log(Math.PI)

const course = {
    name: "Javascript",
    price: 999,

    buyCourse: function(){
        console.log('course bought')
    }
}

// console.log(Object.getOwnPropertyDescriptor(course, "name"))

Object.defineProperty(course, "name", {
    // writable: false,
    enumerable: false
})

for (const [key, value] of Object.entries(course)) {
    if (typeof value !== "function") {
        console.log(`${key} ; ${value}`)
    }
}

