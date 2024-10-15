
// Higher Order Array Methods 

// Array Map Method:
let arr = [45 , 23 , 21];
let a = arr.map((value ,index , array)=>{
        console.log(value , index ,array );
        return value + index; //it does modifies the orginal array
})
console.log(a);
 

// Array filter Method:
let arr2 = [81 , 22 , 61 , 0 , 3 , 5];
let a2 = arr2.filter((a)=>{
    return a<10;  //it does modifies the orginal array
})
console.log(a2);


// Array reduce Method:
let arr3 = [1,2,3,5,2,1];
let a3 = arr3.reduce((h1 ,h2)=>{
    return h1 + h2; //it uses first two values then it runs until end..
})
console.log(a3);
 
// Other Way 
const reducefuc = ((h3 ,h4)=>{
    return h3 * h4;
})
let a4 = arr3.reduce(reducefuc);
console.log(a4);