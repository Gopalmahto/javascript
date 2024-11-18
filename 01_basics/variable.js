const accountId=2345
var email = "gopal@gmail.com"
let pass = "gopal"
city = "dhanbad"
let state;

// accountId=23  reassigning to const is not posssible
console.log(accountId);
console.table([accountId,email,pass,city,state])
/*
   prefer not to use var
   bcoz of issue in block scope and functional scope
 */