//READ THE COMMENTS TO UNDERSTAND
//topics: operators, conditionals, loops

// 1. Operators

let a = 2;
let b = 3;
console.log(a + b); //output is obvious, 5 right?
console.log(a * b);
console.log(b % a); //modulus
console.log(b / a);
console.log(a - b);
//these were regular operators

//Comparison Operators
console.log(a > b);
console.log(a == b);
console.log(a < b);

//number as string
let p = "10";
console.log(typeof p);
//type conversion
let q = Number(p);
console.log(typeof q); //converted to number type
console.log(q);

//what about letters?
let x = "10xyz";
let y = Number(x);
console.log(y); //output is NaN

// Rules

console.log(null == undefined); //true
console.log(null === undefined); //false because in this checks type first, null is object type and undefined is its type
//in <,>,>=,<= null is converted to number
console.log(null >= 0); //outputs true
//in string comparison, first letter converts to asci, if same moves to second
console.log("burger" > "pizza");
console.log(NaN == NaN); //false, weird but rules!!

// 2. Loop
//for loop
for (let i = 0; i < 5; i++) {
  console.log(i); //i value from 0 to 4
}

//while loop
let j = 5;
while (j < 10) {
  console.log(j);
  j++;
}

//do while
let z = 0;

do {
  console.log(z);
  z++;
} while (z < 5);

// 3. Conditional

let age = 55;
if (age >= 15 && age < 50) {
  //by && we can use multiple conditions and both needed to be true
  console.log("eligible for internet");
} else if (age >= 50) {
  console.log("boomer!");
} else {
  console.log("not eligible!");
}

// AND logic
let g = 1;
let h = 2;
console.log(g && h); //outputs 2, but why?
// && logic is: if first value is false, it will return the first value itself,
// if first val is true, it will return second

let k = 0;
let l = 12;
console.log(k && l); //0 is false so return first val

// OR logic
let w = 40;
let t = 50;
console.log(w || t);
// || logic is: if first value is true, it will return the first value itself,
// if first val is false, it will return second
