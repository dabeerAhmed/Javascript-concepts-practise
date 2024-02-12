// Arrays
const myArr = [ 0, 1, 2, 3, 4, 5]
const myHeros = ["Ironman", "Thor", "Spiderman"]
const myArr2 = new Array(1,2,3,4,5)
// console.log(myArr[0])
// console.log(myArr2)

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()
// console.log(myArr)

// myArr.unshift(10)   // adds an element at the start of the array
// myArr.shift()          // removes an element from the start of an array
// console.log(myArr)

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(4))

// const newArr = myArr.join()   // join converts all the array values in string type
// console.log(myArr);
// console.log(newArr);


// slice, splice

console.log("A : ", myArr)

//slice
// slice returns the elements of the array excluding the range and doesn't manipulates the original array
const myn1 = myArr.slice(1,3)
console.log(myn1)
console.log("B : ", myArr)

//splice
// splice returns the elements of the array including the range and manipulates the original array, only returns the elements which is not defined in the range of splice
const myn2 = myArr.splice(1,3)
console.log(myn2)
console.log("C : ", myArr)