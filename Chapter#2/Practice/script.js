
// Chapter-2 Problems:

// Question N0 1:
let age = prompt("what is your age?")
age = Number.parseInt(age)
if (age > 10 && age < 20) {
    console.log("Your age is lies between 10 and 20")
}
else {
    console.log("Your age does not lies between 10 and 20")
}



// Question N0 2:
let Age = prompt("what is your age?")
switch (Age) {
    case '12':
        console.log("Your age is 12")
        break;
    case '13':
        console.log("Your age is 13")
        break;
    case '14':
        console.log("Your age is 14")
        break;
    case '15':
        console.log("Your age is 15")
        break;
    default:
        console.log("Your age is not special")
        break;
}


// Question N0 3:
let num = prompt("Enter a Number: ")
num = Number.parseInt(num);
if( num%2 == 0 && num%3 == 0){
    console.log("Your Number is divisible by 2 & 3")
}
else{
    console.log("Your Number is not divisible by 2 & 3")
}


// Question N0 4:
let Num = prompt("Enter a Number: ")
Num = Number.parseInt(Num);
if( Num%2 == 0 || Num%3 == 0){
    console.log("Your Number is divisible by 2 & 3")
}
else{
    console.log("Your Number is not divisible by 2 & 3")
}


// Question N0 5:
let AGE = 19;
let a = AGE > 18 ?  "You can drive" : "You can't drive";
console.log(a);