//Objects

//singleton
//Object.create

const mySym = Symbol("key1")

const jsUser = {
    name: "Pulkit",
    "full name": "Pulkit Gupta", 
    [mySym]: "mykey1",
    age: 20,
    location: "Delhi",
    email: "pulkit@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.name)
// console.log(jsUser["full name"])
// console.log(jsUser.mySym)
// console.log(jsUser[mySym])

jsUser.email = "pulkit@openai.com"

// console.log(jsUser)

//Object.freeze(jsUser)
jsUser.email = "pulkit@ms.com"
// console.log(jsUser)

jsUser.greeting = function(){
    console.log("Hello Pulkit")
}

jsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`)
}

// Call the method directly — the function itself logs "Hello Pulkit".
jsUser.greeting()

jsUser.greetingTwo()