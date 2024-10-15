// Promises In JS : 
let promise = new promise(function(resolve, reject){
    alert("Hello")
    resolve(56);
})
console.log("Hello one");
setTimeout(() => {
    console.log("Hello Two in 2 Second")
}, 3000);
console.log("My Name is " + "Hello Three")
console.log(promise);


