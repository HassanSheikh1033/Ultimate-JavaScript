
// Conditional Statements 
let a = prompt("Hey, what's your age?");
a = Number.parseInt(a); // converting string into number
if (a < 0) {
    alert("This is an invalid Age");
}
else if (a < 9) {
    alert("You are a kid , you cannot even think of driving")
}
else if (a < 18 && a >= 9) {
    alert("You are kid , you can think of driving after 18")
}
else {
    alert("You can now drive as you are above 18");
}


// Ternary Operator (?): 
let x = 25;
// Syntax : (condition ? True Statement : False Statement ) 
console.log("You can", (a<18? "not drive" : "drive"));

