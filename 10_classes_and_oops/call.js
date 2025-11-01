function setUsername(username){
    //complex DB calls
    this.username = username
    // return this.username
    
}

function createUser(username, email, password){
    setUsername.call(this, username)

    this.email = email
    this.password = password 
}

const newVar = new createUser("pulkit", "pulkit@google.com", "123")
console.log(newVar)