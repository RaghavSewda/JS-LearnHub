const accountId = 144553
let accountEmail = "raghav@google.com"
var accountPassword = 12345
accountCity = "Delhi"
let accountState
// accountId = 2 not allowed

/*
    Prefer not to use var 
    because of issue in block scope and functional scope
*/
accountEmail =  "rs@rs.com"
accountPassword = 212121
accountCity = "New Delhi"

console.log(accountId);

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])