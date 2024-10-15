
// Chapter 6 Practice Set :
// Question: 1,2,3.
// let runAgain = true;
// const canDrive = (age) => {
//     return age >= 18 ? true : false;
// }
// while (runAgain) {
//     let age = prompt("Enter your Age: ")
//     age = Number.parseInt(age);

//     if (age < 0) {
//         console.error("Please enter a valid age.");
//         break;
//     }

//     if (canDrive(age)) {
//         alert("Yes you can drive")
//     }
//     else {
//         alert("You cannot drive")
//     }
//     runAgain = confirm("Do you want to play again?")
// }


// Question: 4
// let num = prompt("Enter a number: ")
// num = Number.parseInt(num);

// if (num > 4) {
//     location.href = "https://google.com"
// }



// Question: 5
let color = prompt("Enter the page background color: ")
document.body.style.background = color;