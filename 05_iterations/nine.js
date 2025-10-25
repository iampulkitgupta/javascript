const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc, currVal){
//     console.log(`acc: ${acc}, currVal: ${currVal}`)
//     return acc + currVal
// }, 0)

const myTotal = myNums.reduce( (acc, currVal) => acc+currVal, 0)


// console.log(myTotal)


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "css course",
        price: 1999
    },
    {
        itemName: "html course",
        price: 999
    }
]


const shoppingCartTotal = shoppingCart.reduce( (acc, item) => acc + item.price, 0)

console.log(shoppingCartTotal)