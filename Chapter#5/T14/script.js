
// Using Loops with Array 
let num = [3,5,8,2,6];


// For Loop:
for (let i = 0; i < num.length; i++) {
     console.log(num[i]);    
}


// ForEach Loop:
num.forEach(element => {
    console.log(element*element)
});


// Array.from :
let name1 = "Hassan";
let arr = Array.from(name1);
console.log(arr);


// For - of -Loop:
for (let a of num) {
    console.log(a);
}


// For - in -Loop:
for (let r in num) {
    console.log(r);
    // console.log(num[r]);
}