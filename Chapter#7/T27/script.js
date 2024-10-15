//Matches , Closest , Contains :
let id1 = document.getElementById("id1");
let sp1 = document.getElementById("sp1");
console.log(id1);
console.log(id1.matches(".class"));//it matches,then it returns true..
console.log(id1.matches(".box"));
console.log(sp1.closest(".box"));
console.log(sp1.closest("#sp1")); //if it cannot find then it goes to closest parent...
console.log(id1.contains(sp1));
console.log(sp1.contains(sp1));
console.log(sp1.contains(id1));


