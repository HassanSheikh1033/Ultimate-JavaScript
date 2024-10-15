
// Chapter :3 Problems 
// Question:1 
let marks ={
    Hassan : 98,
    Moeed : 86,
    Eman : 73,
    Ayesha : 92,
}
for( i = 0 ; i<Object.keys(marks).length; i++){
    console.log("The Marks of " +  Object.keys(marks)[i]  + " are " + marks[Object.keys(marks)[i]])
}


// Question:2
for(let key in marks){
    console.log("The Marks of " + key + " are " + marks[key]);
}


// Question:3
let cn = 69;
let i;
while (i !=cn) {
    console.log("Try Again")
    i = prompt("Enter a Number: ")
}
console.log("You enter a correct Number")


// Question:4
const mean =( a,b,c,d) =>{
    return (a,b,c,d)/4;
}
console.log(mean(4,8,6,7));