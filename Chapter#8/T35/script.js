// Handling Brower Events : 

let x = function (e) {
    // console.log(e);
    alert("Hello World 1");
    console.log(e.type , e.clientX , e.clientY );
}
let y = function (e) {
    alert("Hello World 2");
}
btn.addEventListener('click', x)

btn.addEventListener('click', y)

let a = prompt("What is your Favorite Number?")
if (a == "2") {
    btn.removeEventListener('click', x);
}
else if (a == "1") {
    btn.removeEventListener('click', y);
}


