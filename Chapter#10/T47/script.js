// Fetch API :
let p = fetch("https://goweather.herokuapp.com/weather/Islamabad") //In such Case: "p is promise"
p.then((response) => {
    console.log(response.status);
    console.log(response.ok)
    console.log(response.headers)
    return response.json();
}).then((value) => {
    console.log(value);
})




