// The Promise API : 
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve("Value 1")
        reject(new Error("Error"))
    }, 1000);
})

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Value 2")
    }, 2000);
})

let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Value 3")
    }, 1000);
})
let p4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Value 4")
    }, 2000);
})
let p5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Value 5")
    }, 1000);
})
let p6 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Value 6")
    }, 500);
})




// Promise.all:
let Promise_all = Promise.all([[p4, p2, p3]]);
Promise_all.then((value) => {
    console.log(value);
})


// Promise.allSettled:
let Promise_all_settled = Promise.allSettled([[p1, p2, p3]]);
Promise_all_settled.then((value) => {
    console.log(value);
})


// Promise.race:
let Promise_race = Promise.race([[p2, p3, p4, p5]]);
Promise_race.then((value) => {
    console.log(value);
})


// Promise.any:
let Promise_any = Promise.any([[p1, p2, p3]]);
Promise_any.then((value) => {
    console.log(value);
})


// Promise.resolve:
let Promise_resolve = Promise.resolve(6);


// Promise.rejected:
let Promise_rejected = Promise.reject(new Error("Error"));




