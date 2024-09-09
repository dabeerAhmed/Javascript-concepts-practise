// reduce 

const myNums = [1,2,3]
const myTotal = myNums.reduce( function(acc, curVal){
    // console.log(`acc: ${acc}, curVal:${curVal}`);
    return acc + curVal
}, 0)
// console.log(myTotal)

const myTotal2 = myNums.reduce( (acc, curVal) => acc + curVal, 0)
// console.log(myTotal2)

for(let i = 0; i<myNums.length; i++){
    const num = i + myNums[i]
    // console.log(num)    
}


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "python course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "Data science course",
        price: 12999
    },
]

const CartTotal = shoppingCart.reduce( (acc,curVal) => {
    return acc + curVal.price
    
},0)
console.log(CartTotal)
  