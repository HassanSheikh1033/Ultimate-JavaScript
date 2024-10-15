
// Fuctions in JS 
function onePlusAvg(x ,y) {
    // console.log("Done");
    return Math.round(1 +(x + y)/2);
}

let a =1;
let b =2;
let c =3;

console.log("One Plus average of a and b is" ,onePlusAvg(a,b) ) //Function Invocation
console.log("One Plus average of b and c is" ,onePlusAvg(b,c) )
console.log("One Plus average of a and c is" ,onePlusAvg(a,c) )



//Arrow Functions:
const sum = (p,q)=>{
    return p+q ;
} 
console.log("Sum of Numbers Are" , sum(9,7));

// Recalling the Function 
const hello = ()=>{
    console.log("Hey hy, brother I am too Fine yar")
    return "hy";
}

let v = hello();
console.log(v);