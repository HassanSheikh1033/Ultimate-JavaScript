// localStorage & related methods : 
let key = prompt("Enter key you want to set")
let value = prompt("Enter value you want to set")

// localStorage.setItem: 
localStorage.setItem(key , value);

// localStorage.getItem:
console.log(`The value at ${key} is ${localStorage.getItem(key)}`)

// localStorage.removeItem: 
if(key == "red"  || key == "blue"){
     localStorage.removeItem(key);
}
// localStorage.clear:
if(key == 0){
    localStorage.clear();
}

// localStorage.length();
// localStorage.key();