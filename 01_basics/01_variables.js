const accountId = 132434;
let accountEmail = "dabeer@gmail.com";
var accountPassword = "12345";
accountCity = "Karachi";
let accountState;

// accountId = 2 // not allowed

accountEmail = "db@gmail.com"
accountPassword = "212121"
accountCity = "Lahore"

console.log(accountId)

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
