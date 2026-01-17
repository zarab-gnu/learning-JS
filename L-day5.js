//READ THE COMMENTS TO UNDERSTAND
//topics: Array

//Empty array
let emptArr = []; //using [] means array

// Array of numbers
let scores = [99, 42, 50, 82, 64, 77];

// Array of String
let Currencies = ["Dinar", "Rial", "Euro", "Dollar", "Pound", "Taka"];

// Mixed Data Types
let arrMix = [30, "Bruh", false, null, "324"];

// lenght of an array
console.log(scores.length); // 6 scores

// Accessing elements of an array
//indexing starts with 0
console.log(Currencies[2]);

// Changing element
Currencies[1] = "Rupee";
console.log(Currencies);

// what if the index data doesnt not exits?
console.log(arrMix[9]); //outputs undefined

// Array Modificaton: adding, removing
//Adding: .push(items(s)) is used
Currencies.push("Rial", "Peso"); //adds at the end of the array
console.log(Currencies);

//Removing: .pop() delets from the last
console.log(scores);
scores.pop();
console.log(scores);

// Adding/Removing from beginning of the array
//Adding: .unshift(item(s)) is used
scores.unshift(53);
console.log(scores);

//Removing: .shift() is used
scores.shift();
console.log(scores); // 53 is removed

//Note: shift() & unshift() aint recommended as it can make
// system slower becuase every other element needs to be shifted to new position

// Iteration: Looping over an array

let total = 0;
for (let i = 0; i < scores.length; i++) {
  console.log("index:", i + 1, "=", scores[i]);
  total += scores[i]; // this means total = total + scores[i]
}
console.log(total);

// for..of loop
for (const a of arrMix) {
  console.log(a);
}

// Type of Array
console.log(typeof arrMix); //non-premivtives are object type (prev. lesson L-1)

// Advanced array manipulation

// .splice() method: add, remove, replace
// array.splice(startIndex, deleteCounts, item(s) to be added)
const months = ["Jan", "March", "April", "June"];

//remove March
months.splice(1, 1); //start at index: 1, delete 1 element from that index
console.log(months);

//adding Feb
months.splice(1, 0, "Feb"); //start at index: 1, delete 0 elements form that index, add Feb at index: 1
console.log(months);

//replace April with May
months.splice(2, 1, "May");
console.log(months);

// .slice() method: making a copy
// array.slice(startIndex, endIndex); end index not included
const animals = ["ant", "bison", "camel", "duck", "elephant"];

//copy the elements from index 2 to 4, 4 won't be included by rules
const midAnimals = animals.slice(2, 4);
console.log(midAnimals);

// if end index not included, it copies till the end of the array
const onlyStart = animals.slice(2);
console.log(onlyStart);

//full copy of the array
const copyAnimals = animals.slice();
console.log(copyAnimals);
console.log(animals); //original one is unchanged in this method

// Spread operator: "..."
//without spread operator
copyArr = [scores, months];
console.log(copyArr); //but this will contain [] separating two arrays

//with spread operator
copyArrNoBraces = [...scores, "in months: ", ...months]; //elements can be added too
console.log(copyArrNoBraces); //now no [] inside

// Converting
//array to string
// .join("separator") method
const monthList = months.join(" ");
console.log(monthList);

//Searching
// .indexOf("item") method
console.log(scores.indexOf(99));

// .lastIndexOf("item") for the last index of any element (if multiple similar elements exists)

// .includes("item") method
console.log(months.includes("Dec"));

// Advanced Array Methods
// .sort() method for Sorting
scores.sort();
console.log(scores);

arrMix.sort();
console.log(arrMix);
//this method works by ascii value, so for mix data types
// the elements that have lower ascii value will be first and continue

// IMPORTANT TO UNDERSTAND!!
let numArr = [2, 243, 100, 34, 95];
numArr.sort();
console.log(numArr); //output :[ 100, 2, 243, 34, 95 ] ; but why?
// well it checks the first character of 100, as converted to strings, 1 which has lower ascii value than 2

// Compare function for number sorting correctly
// (a,b) => a - b
// how this works?
// compare function takes two arguments, a and b
// If it returns a negative number (< 0): a should come before b.
// If it returns a positive number (> 0): a should come after b.
// If it returns 0: a and b are considered equal, and their order doesn't change relative to each other.

// lets analyze: compare function
// Case 1: Let's say a is 5 and b is 10. a-b = -5; as negative a comes BEFORE b
// Case 2: Let's say a is 25 and b is 2. a-b = 23; as positive, a comes AFTER b
// Let's say a is 100 and b is 100. a-b=0; as zero, order doesnt matter!

numArr.sort((a, b) => a - b);
console.log(numArr);

// Flattening Arrays: the .flat() method
let arr2d = [1, 3, 4, [2, 5], 6];
console.log(arr2d); //outputs as it is, with [] inside
let flat2dArr = arr2d.flat();
console.log(flat2dArr); //no [] inside

let arrNest = [1, [2, [3, [4]]]];
console.log(arrNest.flat()); //but only 1 level of [] is gone, rest 2 remains

//to go levels deep we can give numbers
console.log(arrNest.flat(2)); //still 3rd one exits
// so if we dont know levels, we can use .flat(Infinity); this is flatten no matter how deep level
console.log(arrNest.flat(Infinity));
//this method also removes empty slots in sparse arrays

// Delete elements from array
// .pop() method: remove from the end
// .shift() method: remove from the beginning
// .splide(startIndex, deleteCount): remove from middle
// delete arr[index]: not recommended, creates sparese array, hole in it meaning length is as it was
