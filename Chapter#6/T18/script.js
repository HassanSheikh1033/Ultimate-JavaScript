
//Console Methods:

console.log("log"); //Print all thing.
console.info("info"); //print messages to stdout in a newline.Similar to the console.log()
console.warn("warn"); //use for warning.
console.error("error"); //use for show an error.
console.assert("assert" !=false);
console.assert(5>55);
// console.table(console)
// console.clear


console.time("ForLoop")
for(let i = 0; i<500; i++){
    console.log(233)
}
console.timeEnd("ForLoop")

console.time("whileLoop")
let i =0;
while(i < 500){
    console.log(233)
    i++;
}
console.timeEnd("whileLoop")
