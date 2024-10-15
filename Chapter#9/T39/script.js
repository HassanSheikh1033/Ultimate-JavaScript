// Promise .then() and .catch() :
let p1 = new Promise((resolve, reject) => {
    console.log("Promise is pending");
    setTimeout(() => {
        console.log("I am promise and I am resolved");
        resolve(true); //Resolve => Happy Fulfillment
    }, 5000);
});
let p2 = new Promise((resolve, reject) => {
    console.log("Promise is pending");
    setTimeout(() => {
        console.log("I am promise and I am rejected");
        reject(new Error("I am an error")); //Reject => Rejected / Unexpected Fulfillment.
    }, 5000);
});

// To Get the Value:
p1.then((value) => {
    console.log(value);
})

//Error Handling by then:
p2.then((value) => {
    console.log(value);
}, (value) => {
    console.log(error);
})

// To Catch the Error:
p2.catch((error) => {
    console.log("Some error occurred in p2");
})