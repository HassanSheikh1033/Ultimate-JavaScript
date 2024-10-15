
// Variables Types are:

// 1 : Var (Global Scoped)
var a =45;
var a = "p" //(Var can be re declared & updated.)
var b = "hassan";
var c = null;
var d = undefined;
{
    var b = "this"
    console.log(b);
}
console.log(b);

// 2 : let (Block Scoped)
let a =45;
let b = "hassan";
b = 4
let c = null;//(Var can be updated.)
let d = undefined;
{
    let b = "this"
    console.log(b);
}
console.log(b);

// 3 : Const (Block Scoped)
const a = 67;
const author = "Hassan"
//let author = "Moeed" //(it throws an error because const can't be changed)
author = 5 //(Again throws an error , const can't be updated & redeclared)
//const h; //(also assign value) 