const coding = ["js","ruby","java","python","cpp"]

const values = coding.forEach( (item)=>{
    // console.log(item)
    return item
} )
// console.log(values)

const myNums = [1,2,3,4,5,6,7,8,9,10]

const myNums2 = myNums.filter( (item)=>{
    return item > 4
} )
// console.log(myNums2)

const myNums3 = myNums.filter((num)=> num>5)
// console.log(myNums3)



const newNums = []
myNums.forEach( (num)=>{
    if(num>7){
        newNums.push(num)
    }
} )
// console.log(newNums)



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


  const userBooks = books.filter((bk)=>{
    return bk.genre == "History"
  })
  const userBooks2 = books.filter((bk) => bk.publish >= 1970 && bk.genre == 'History')

  console.log(userBooks2)