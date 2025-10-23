const user ={
    username: "pulkit",
    price: "999",

    welcomeMessage: function () {
        // console.log(this);
        // console.log(`${this.username}, welcome to website`);
        
    }    
}


user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

// console.log(this);


// function chai() {
//     console.log(this)
// }

// chai()


// const chai = function () {
//     let username = "pulkit"
//     console.log(this.username)
// }

const chai = () => {
    let username = "pulkit"
    console.log(this)
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 +  num2
// }

// const addTwo = (num1, num2) => num1 +  num2
//const addTwo = (num1, num2) => (num1 +  num2)

const addTwo = (num1, num2) => ({
    username: "pulkit"
})



console.log(addTwo(3, 4))


const myArray = [2, 5, 7, 8]

// myArray.forEach()