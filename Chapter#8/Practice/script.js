// <!-- Question: 3 --> 
document.getElementById('google').addEventListener("click" , function () {
    window.location = 'https://google.com';
})

// <!-- Question: 4 --> 
// setTimeout(async () => {
//     let url = "https://jsonplaceholder.typicode.com/todos1"
//     console.log(await fetchContent(url))
// }, 3000);


// <!-- Question: 5 --> 
setInterval( async () => {
    document.querySelector("#bulb").classList.toggle("bulb");
}, 300);
