// String Methods :
let name1 = "Harry";

//length:
console.log(name1.length);

//toUpperCase:
console.log(name1.toUpperCase());

//toLowerCase:
console.log(name1.toLowerCase());

//slice :
console.log(name1.slice(2,4));
console.log(name1.slice(2));

//replace:
console.log(name1.replace("Har" , "Per"));

//concat:
let friend = "Naman";
console.log(name1.concat("is a friend of " , friend , " Ok"));

//trim:
let friend2 = "    Meena    ";
console.log(friend2.trim())

//charAt :
const str = "Hello, World!";
const char = str.charAt(7); // Returns 'W'

//charCodeAt :
const str1 = "Hello, World!";
const unicodeValue = str1.charCodeAt(7); // Returns 87 (the Unicode value of 'W')

//indexOf :
const str2 = "Hello, World!";
const index = str2.indexOf("World"); // Returns 7

//lastIndexOf :
const str3 = "Hello, World!";
const index1= str3.lastIndexOf("l"); // Returns 10

//substring :
const str4 = "Hello, World!";
const substring = str4.substring(7, 12); // Returns 'World'

//substr :
const str5 = "Hello, World!";
const substring1 = str5.substr(7, 5); // Returns 'World'

//replaceAll :
const str6 = "Hello, World! World is great.";
const newStr = str6.replaceAll("World", "Universe"); // Returns 'Hello, Universe! Universe is great.'
