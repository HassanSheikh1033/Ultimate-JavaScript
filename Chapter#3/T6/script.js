
// FOR LOOP: 
let sum = 0 ;
let n = prompt("Enter value of Number:");
n = Number.parseInt(n);
for( i = 0 ; i<n ; i++ ){
    sum += ( i + 1);
}
console.log("Sum of First" + n + "Natural Number are" + sum);
// console.log(i);



// FOR-In LOOP:
let obj ={
   Hassan : 96,
   Bilal : 72,
   Asad : 54,
   Eman : 46,
   Ayesha : 84,
}
for (let a in obj){
    console.log("Marks of" + a + " are" + obj[a])
}


// FOR-OF LOOP:
for (let b of "Hassan") {
    console.log(b);
}
