// Cookies in JS : 
console.log(document.cookie)
document.cookie = "Name = hassan21lm0wv27w8rdeg441sais963"
document.cookie = "Name1 = huzaif21lm0wv27w7wdas1hyg6sdsde8"
document.cookie = "Name = Hassan"
let key = prompt("Enter your key")
let value = prompt("Enter your value")
document.cookie = `${encodeURIComponent(key)} = ${encodeURIComponent(value)}` 
//Then we will write this : "decodeURIComponent".
console.log(document.cookie)