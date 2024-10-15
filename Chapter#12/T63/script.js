// Destructuring assignment : 
let arr = [7 , 8 , 9 , 4 , 6 , 15 , 18 , 21]
let [a , b , , c , d, ...rest] = arr
console.log(a , b , c , ...rest);
let {x , y} = {x : 1 , y : 5}
console.log(x,y)

//  Spread Operator : 
let arr1 = [3,5,8]
let obj1 = {...arr1}
console.log(obj1)


function sum(v1, v2 ,v3) {
    return v1 + v2 + v3;
}

console.log(sum(...arr1))

let obj2 ={
    name1 : "Hassan",
    company : "Company XYZ",
    address : "XYZ" 
}

console.log({...obj2 , name1: "John" , company: "ABC"})
console.log({ name1: "John" , company: "ABC"  , ...obj2})  //This will print obj2 without changing value....

