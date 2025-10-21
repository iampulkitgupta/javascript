// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isUserLoggedIn = true
const outsideTemp = null
let userEmail

const id = Symbol('123')
const anotherId = Symbol('123')

const bigNumber = 23464374567465476n

//console.log(id === anotherId);

// Reference(Non Primitive)

//Array, Objects, Functions

const heros = ["Superman", "spiderman", "Captain America"]

let myObj = {
    name: "Pulkit",
    age: 22
}

//console.log(myObj)

const myFunc = function(){
    console.log("Hello World")
}

console.log(typeof(anotherId))

//https://262.ecma-international.org/5.1/#sec-11.4.3


//++++++++++++++++++++++++++++++++++

//Stack (Primitive), Heap(Non-Primitive)

let myName = "Pulkit"

let mySecondName = myName

mySecondName = "Advik"

// console.log(myName)
// console.log(mySecondName)


let userOne = {
    email: "pulkit@google.com",
    upi: "user1@upi"
}

let userTwo = userOne

// console.log(userOne)
// console.log(userTwo)

// userTwo.email = "hello@google.com"

console.log(userOne)
console.log(userTwo)