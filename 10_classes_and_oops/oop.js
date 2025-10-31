const user = {
    username: "hitesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details")
        // console.log(`Username: ${this.username}`)
        console.log(this)
    }

}

console.log(user)
console.log(user.username)
// console.log(user.getUserDetails())
console.log(this)

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    // return this
}

const userOne = new User("Pulkit", 8, true);
const userTwo = new User("Advik", 9, false);


console.log(userOne)
console.log(userTwo)


