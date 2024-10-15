// JS Chapter 9 - Practice Set :
// Question : 1
const loadScript1 = async (src) => {
    return new Promise((resolve, reject) => {
        let script1 = document.createElement("script");
        script1.src = src;
        script1.onload = () => {
            resolve(src + " Done Successfully");
        };
        script1.onerror = () => {
            reject(new Error("Failed to load script: " + src));
        };
        document.head.appendChild(script1);
    });
};

loadScript1("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js")
    .then((value) => {
        console.log(value);
    })
    .catch((error) => {
        console.error(error.message);
    });





// Question : 2
const LoadScript = async (src) => {
    return new Promise((resolve, reject) => {
        let script = document.createElement("script");
        script.src = src;
        script.onload = () => {
            resolve(src + "Done_Succesfully");
        }
        document.head.append(script)
    })
}
const main1 = async () => {
    console.log(new Date().getMilliseconds())
    let a = await LoadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js");
    console.log(a);
    console.log(new Date().getMilliseconds())
}
main1();




// Question : 3
let p = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error("Please this is not acceptable.."))
        }, 3000);
    })
}

let a = async () => {
    try {
        let c = await p();
        console.log(c);
    }
    catch (error) {
        console.log("This Error has been Handled..")
    }

}
a();





// Question : 4
let p1 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(10);
        }, 2000);
    })
}

let p2 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(20);
        }, 1000);
    })
}

let p3 = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(30);
        }, 3000);
    })
}

const run = async () => {
    console.time("Run")
    // let x1 = await p1(); //Fetch First 10 Products from Database.. 
    // let x2 = await p2(); //Fetch another 10 Products from Database.. 
    // let x3 = await p3(); //Fetch yet another 10 Products from Database.. 
    // console.log(x1 , x2 , x3)

    let x1 =  p1(); //Fetch First 10 Products from Database.. 
    let x2 =  p2(); //Fetch another 10 Products from Database.. 
    let x3 =  p3(); //Fetch yet another 10 Products from Database.. 
    let x1x2x3 = await Promise.all([x1, x2, x3])
    console.log(x1x2x3);


    console.timeEnd("Run")
}
run();
