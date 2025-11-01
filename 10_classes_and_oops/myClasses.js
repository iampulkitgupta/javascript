// ES6

// class User{
//     constructor(username, email, password) {
//         this.username = username;
//         this.email = email;
//         this.password = password        
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     validateUsername(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new User("pulkit", "pulkit@google.com", "123")


// console.log(chai.encryptPassword());
// console.log(chai.validateUsername());


// behid the scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password  
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User.prototype.validateUsername = function(){
    return `${this.username.toUpperCase()}`
}


const tea = new User("tea", "tea@google.com", "456")

console.log(tea.encryptPassword());
console.log(tea.validateUsername());