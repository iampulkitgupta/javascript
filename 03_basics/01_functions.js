// console.log("P")
// console.log("U")
// console.log("L")
// console.log("K")
// console.log("I")
// console.log("T")

function sayMyName(){
    console.log("P")
    console.log("U")
    console.log("L")
    console.log("K")
    console.log("I")
    console.log("T")
}

// sayMyName()

function addTwoNumbers(number1, number2){
    let result = number1 + number2
    return result
}

// console.log("Result ", addTwoNumbers(1, 2))

function loginUserMessage(username = "sam"){    
    if (!username){
        console.log("Please enter a username")
        return
    }            
    return `${username} just logged in`
}

//loginUserMessage()

console.log(loginUserMessage("Pulkit"))


function calculatedCartPrice(...num1){        
    return num1
}

// console.log(calculatedCartPrice(200, 400, 500))

const user = {
    username: "pulkit",
    price: "199"
}


function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

handleObject({
    username: "Advik",
    price: "399"
})

const myNewArr = [200, 400, 500, 600]

function returnSecondValue(getArray){
    return getArray[1]    
}

// console.log(returnSecondValue(myNewArr))
console.log(returnSecondValue([200, 400, 500, 1000]))