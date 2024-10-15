// Some more Array Metthods 
//delete :
let num = [1,2,3,4,5];
console.log(num.length);
delete num[0];
console.log(num);
console.log(num.length);

//concat :
let num1 = [1,2,3,4,5];
let num2 =[6,7,8,9,10];
let num3 =[11,12,13,14,15];
let newArray = num1.concat(num2 ,num3);
console.log(newArray);

//sort :
let compare = (a,b)=>{
    return a-b; //For Assending sorting 
    // return b-a; //For desending sorting 
}
let nm = [1 , 3, 214, 5 , 96, 178, 13, 14]; //aphabatically sorting
nm.sort(compare); //modifies the original Array..
console.log(nm);

//reverse :
let r = [5,4,3,2,1]
r.reverse();
console.log(r);

//splice: 
// Syntax :: .splice(start[index],remove,add);
let s = [1 , 2 , 3 , 36 , 23 , 25 , 28 ]
let delValues = s.splice(2 , 3 , 1021 , 1022 , 1023 , 1024);
console.log(s);
console.log(delValues);

//slice:  
let i = [1 , 2 , 13 , 45 , 61 , 72 , 89];
let sice = i.slice(3,5) //it does not modifies orginal array
console.log(sice);
