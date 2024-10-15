// -------Searching the DOM------ 
//getElementById:
let ctitle = document.getElementById("first-card-title");
ctitle.style.color = "red"


//getElementsByClassName:
let catitle = document.getElementsByClassName("card-title")[3];
catitle.style.color = "gray"


// querySelectorAll:
let ctitles = document.querySelectorAll(".card-title")
ctitles[0].style.color = "red"
ctitles[1].style.color = "blue"
ctitles[2].style.color = "green"
console.log(ctitles);


//querySelector:
document.querySelector(".this").style.color = "red"
document.querySelector(".this").style.background = "black"


//getElementsByTagName:
console.log(document.getElementsByTagName("a"))
console.log(document.querySelector(".card").getElementsByTagName("a"))


//getElementsByName:
console.log(document.getElementsByName("search"))