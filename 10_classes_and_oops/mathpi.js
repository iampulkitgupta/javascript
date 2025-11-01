const desc = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(desc)


// console.log(Math.PI)
// Math.PI = 5
// console.log(Math.PI)

// const myNewObj = Object.create(null)

const chai = {
    name: "Ginger Chai",
    price: 299,
    isAvailable: true,

    orderChai: function(){
        console.log("chai prepared")
    }
}

// console.log(chai)

// console.log(Object.getOwnPropertyDescriptor(chai, "name"))

// chai.name = "Masala Chai"

// console.log(chai)

// Object.defineProperty(chai, "name", {writable: false, enumerable: true, configurable: false})

// console.log(Object.getOwnPropertyDescriptor(chai, "name"))

// chai.name = "Ginger Chai"

// console.log(chai)

// for (let key of Object.keys(chai)) {
//     // console.log(typeof chai[key])

//     if (typeof chai[key] !== 'function'){
//         console.log(`${key}: ${chai[key]}`)    
//     }           
// }

for (let [key, value] of Object.entries(chai)) {
    if(typeof value !== 'function'){
        console.log(`${key}: ${value}`)
    }
}


