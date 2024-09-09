const coding = ['js', 'java', 'python', 'cpp']
const values = coding.forEach( (key) => {
    return key
})
// console.log(values)    //it will provide us undefined because forEach doesn't return 


const myNums = [ 1,2,3,4,5,6,7,8,9,10]
const newNums = myNums.filter( (num) => num > 4)
// console.log(newNums)

const newNums2 = myNums.filter( (num) => {
    return num > 4
})
// console.log(newNums2)

//We can also perform the same operation with forEach but we need to use more logic in it like below code snippet;

const newNums3 = []
myNums.forEach( (val) => {
    if(val >4){
        newNums3.push(val)
    }
})
// console.log(newNums3)

const books = [
        {
            title: 'Book One', genre:"Fiction", publish:1900, edition:1000
        },
        {
            title: 'Book Two', genre:"Non-Fiction", publish:1910, edition:2000
        },
        {
            title: 'Book Three', genre:"Fiction", publish:1920, edition:3000
        },
        {
            title: 'Book Four', genre:"Non-Fiction", publish:2930, edition:4000
        },
        {
            title: 'Book Five', genre:"History", publish:1940, edition:5000
        },
        {
            title: 'Book Six', genre:"Science", publish:1500, edition:6000
        },
        {
            title: 'Book Seven', genre:"Science", publish:1960, edition:7000
        },
        {
            title: 'Book Eight', genre:"History", publish:1970, edition:8000
        },
        {
            title: 'Book Nine', genre:"Geometry", publish:1980, edition:9000
        },
    ];


const userBooks = books.filter( (bk) => bk.genre === 'History')
// console.log(userBooks);

const userBooks2 = books.filter( (bk) => {
    return bk.publish > 2000
})
// console.log(userBooks2);

const userBooks3 = books.filter( (bk) => {
    return bk.publish >= 1955 && bk.genre === 'History'
})
// console.log(userBooks3);