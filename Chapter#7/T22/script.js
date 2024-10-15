
// Accessing children of an element:
console.log(document.body.firstChild)
console.log(document.body.lastChild)
console.log(document.body.childNodes)
let arr = Array.from(document.body.childNodes);
console.log(arr);

// These following are always true: 
// Element.childNodes[0] === Element.firstChild 
// Element.childNodes[Element.childNodes.length - 1] === Element.lastChild 
