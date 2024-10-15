// Async_Await : 
async function Weather() {
    let LahoreWeather = new Promise((resolve, rejected) => {
        setTimeout(() => {
            resolve("27 deg")
        }, 1000);
    })

    let IslamabadWeather = new Promise((resolve, rejected) => {
        setTimeout(() => {
            resolve("21 deg")
        }, 2000);
    })
    // IslamabadWeather.then(alert);
    // LahoreWeather.then(alert);
    console.log("Fetching Lahore Weather PLZ wait......")
    let lahoreW = await LahoreWeather;
    console.log("Fetched Lahore Weather: " + lahoreW);

    console.log("Fetching Islamabad Weather PLZ wait......")
    let IslamabadW = await IslamabadWeather;
    console.log("Fetched Islamabad Weather: " + IslamabadW);
    return [lahoreW, IslamabadW];
}

const Thunder = async () => {
    console.log("Hey, I am Thunder and I am waiting ")
}

const main1 = async () => {
    console.log("Wellcome to control Room")
    let a = await Weather();
    let b = await Thunder();
    a.then((value) => {
        console.log(value);
    })
}
main1();