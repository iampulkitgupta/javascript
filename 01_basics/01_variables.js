const accountId = 144553
let accountEmail = "pulkit@gmail.com"
var accountPassword = "12345"
accountCity = "Delhi"
let accountState

// accountId = 2 //not allowed


accountEmail = "pg@google.com"
accountPassword = "12345"
accountCity = "Bengaluru"

console.log(accountId);


/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

