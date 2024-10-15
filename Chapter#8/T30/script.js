// HTML Insertion :

// 1st Way :
let a = document.getElementsByTagName('div')[0];

// a.innerHTML = a.innerHTML + '<h2> Hello World </h2>' 

// 2nd Way (This Way is mostly used..) :
let div = document.createElement('div');
div.innerHTML = '<h2> Hello World </h2>' ;

// Some Methods : 
a.appendChild(div);
a.prepend(div);
a.after(div);
a.before(div);
// a.replaceWith(div); 
