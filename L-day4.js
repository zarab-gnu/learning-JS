//READ THE COMMENTS TO UNDERSTAND
//topics: String, Date

// 1. String

let str1 = "this is string 1";
const str2 = "this is string 2";
const str3 = `this is stirng 3`; //most modern way to write strings
//but why?
const str4 = `this is a
large string
    without line issue`; // meaning I can break between lines in this unlike quotations where it will show error

console.log(str4);

console.log(str4.toUpperCase()); //all upper case

//Accessing particular character
console.log(str1[6]); //6th index starting from 0 left > right

//String is Immutable! (as we learnt earlier)
str1[0] = "b";
console.log(str1); //didnt change

//Finding Sub-string
// particular keyword
console.log(str4.indexOf("rge")); //returns index of 'r'/starting character of sub-string if exists
//what if sub-string in not present?
console.log(str1.indexOf("rge")); //returns -1
//also this is case-sensitive

console.log(str4.lastIndexOf("rge")); //this is finds last index if multiple exists

// if we need in T/F?
console.log(str4.includes("rge"));
console.log(str1.includes("rge"));

// Slicing
console.log(str1.slice(2, 7)); //outputs the part of starting index till the last index, *last index character not included
// for slice from last
console.log(str1.slice(-7, -2));

//rule: js goes form left to right task

// concat strings
const a = "bruce";
const b = "wayne";
console.log(a + " " + b);

// what happens if number added with string?
console.log(12 + "celcius"); //number converts to string

console.log(12 + 10 + "celcius"); //in this case numbers will be added first then converts to string, see the note above

// Replacing Sub-strings
// replace("sub-string","replace with") & replaceAll()
console.log(str1.replace("str", "lemon"));
//if multiple place needed to be changed of same sub-string, use replaceAll()

// Whitespace clearing
// .trim(), .trimStart()/.trimEnd()
let s = "   aobia   fiaj fakwe   ";
console.log(s.trim()); //in between spaces wont be trimmed
console.log(s.trimStart());
console.log(s.trimEnd());

// Splitting String
// based on , or space or anything particular
const names = "bruce, arthur, catwomen";
console.log(names.split(",")); //will ouput in an array

// 2. Date
// finding date from the system
const time = new Date();
console.log(time.toString()); //will show the time that is on your device
console.log(time.toLocaleString());
// but this method is inconsistent, mainly in months (starts from 0=January)
