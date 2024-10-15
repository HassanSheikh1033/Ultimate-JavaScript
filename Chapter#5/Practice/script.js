
// -- Chapter 5 Practice Set --

// Question: 1
// let arr = [1, 2, 3, 5, 6, 7, 85];
//  let a = prompt("Enter a Number: ") 
// a = Number.parseInt(a);
// arr.push(a);
// console.log(arr);



// Question: 2
// let arr1 = [1, 2, 3, 5, 6, 7, 85];
// let a1;
// do {
//     a1 = prompt("Enter a Number: ")
//     a1 = Number.parseInt(a1);
//     arr1.push(a1);
// } while (a1 != 0);
// console.log(arr1);



// Question: 3
let arr2 = [1 , 2 , 30 , 5 ,  50 , 670 , 580 , 85];
let n = arr2.filter((x)=>{
       return x%10 == 0;
})
console.log(n);



// Question: 4
let arr3 = [1 , 2 , 30 , 5 ,  50 , 670 , 580 , 85];
let m = arr3.map((x)=>{
       return x*x ;
})
console.log(m);



// Question: 5
let arr4 = [1,2,3,4];
let r = arr4.reduce((x1,x2)=>{
       return x1 * x2 ;
})
console.log(r);