// Promise Chaining .then() calls :
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Resolve after 2 seconds");
        resolve(56)
    }, 2000);
})

p1.then((value) => {
    console.log(value);
    return new Promise((resolve, reject) => { setTimeout(() => { console.log("Promise 2") }, 2000) });
}) .then((value) => {
    console.log(" We are Done.")
    return 2;
    //It is constant value , Not promise but we can use .then().Js Automatically convert it into immediately resolve Promise... 
}) .then((value) => {
    console.log(" We are Paka Done. ")
})


//LoadScript Function By Promises Chaining:
const LoadScript = (src) => {
    return new Promise((resolve , reject) => {
        let script = document.createElement("script");
        script.type = "text/javascript"; 
        script.src = src;
        document.body.appendChild(script);
        script.onload = () => {
            resolve("Script has been loaded Sir")
        }
        script.onerror = () => { reject(0) };
    })
}

let k1 = LoadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js");
k1.then((value) => {
    console.log(value);
    return LoadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js");
}) .then((value)=>{
      console.log("Second Script Ready")
}).catch((error)=>{
    console.log("We are sorry but having problems to loading this script ")
})


