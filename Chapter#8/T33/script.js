// SetTimeout : 
const sum = (a,b) =>{
    console.log("Yes,I am Running ", (a + b));
    a+b;
}
setTimeout(sum , 10000 , 5 , 5); 

// SetTimeout with inside the Function..
let a = setTimeout(() => { 
     alert("I am inside the setTimeout")
}, 5000);
let b = prompt("Do you want to run the setTimeout?")
if ("no" == b) {
    clearTimeout(a);
}

console.log(a); //Shows Timer ID..



// SetInterval : 
let x = setInterval(() => {
    alert("SetInterval");
}, 3000);

clearInterval(x);



