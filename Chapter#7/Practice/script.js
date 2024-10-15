// Practice Set Chapter 7: 
// Question: 1 
document.getElementsByTagName("nav")[0].firstElementChild.style.color = "red"

// Question: 2
// No because In view page body,head is not included but
// in elements automatically include........ 


// Question: 3
document.getElementsByTagName("nav")[0].firstElementChild.style.color = "green"
document.getElementsByTagName("nav")[0].lastElementChild.style.color = "green"

// Question: 4
Array.from(document.getElementsByTagName("li")).forEach(element => {
    element.style.background = "cyan"
});

// Question: 5
//None of these..