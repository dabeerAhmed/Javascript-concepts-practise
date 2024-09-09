// // for Each loop

const coding = ['js', 'ruby', 'java', 'python', 'cpp']

coding.forEach( function(val){
    // console.log(val)
} )

coding.forEach( (item) => {
    // console.log(item);
    
} )

function printMe(item){
    console.log(item)
}
// coding.forEach(printMe)

coding.forEach( (val, index, array) => {
    // console.log(val, index, array)
})

const myCoding = [
    {
        languageName: 'javascript',
        fileName: 'js'
    },
    {
        languageName: 'python',
        fileName: 'py'
    },
    {
        languageName: 'php',
        fileName: 'php'
    },
]

myCoding.forEach( (item) => {
    // console.log(item.languageName)
} )

const nums = [1,2,3,4,5,6,7,8,9,10]
nums.forEach( (item) => {
    item = item + 12
    // console.log(item)
})