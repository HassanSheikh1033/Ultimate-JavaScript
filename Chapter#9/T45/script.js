// The Error Object : Custom Errors :
try {
   let age = prompt("Enter your Age? ")
   age = Number.parseInt(age); 
   if(age>150){
     throw new ReferenceError("This is probably not True.")
   } 
} catch (error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}
console.log("This Script is Still Running.")


