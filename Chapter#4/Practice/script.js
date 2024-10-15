
// Chapter 4 Practice Set 
// Question: 1 
let str = "Has \" ";
console.log(str.length);



// Question: 2

//includes:
const sentence = 'The quick brown fox jumps over the lazy dog.';
const word = 'fox';
console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);
// Expected output: "The word "fox" is in the sentence"


//startsWith:
const str1 = 'Saturday night plans';
console.log(str1.startsWith('Sat'));
// Expected output: true
console.log(str1.startsWith('Sat', 3));
// Expected output: false


//endsWith:
const str2 = 'Cats are the best!';
console.log(str2.endsWith('best!'));
// Expected output: true
console.log(str2.endsWith('best', 17));
// Expected output: true
const str3 = 'Is this a question?';
console.log(str3.endsWith('question'));
// Expected output: false




// Question: 4
let str5 = "Please give Rs 1000"
// let amount = (str5.slice("Please give Rs " .length));
let amount = Number.parseInt (str5.slice("15"));
console.log(amount)
console.log( typeof amount);



// Question: 5
let friend = "Mawara"
friend[3] = "R"
console.log(friend);  //friend is not changed because string is immutable.