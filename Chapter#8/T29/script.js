// Attributes in HTML :

// getAttribute:
let first = document.getElementById('first');
let a = first.getAttribute("class")
console.log(a);

// hasAttribute:
console.log(first.hasAttribute("class"));
console.log(first.hasAttribute("style"));

// setAttribute:
first.setAttribute("class","true sachin");

// removeAttribute:
// first.removeAttribute("class","true sachin"); 

//Attribute:
console.log(first.attributes);

//DataSet :
console.log(first.dataset)
console.log(first.dataset.player)

const handleClick = () => {
    
}


