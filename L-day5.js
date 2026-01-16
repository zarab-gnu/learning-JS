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
