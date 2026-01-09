//READ THE COMMENTS TO UNDERSTAND
//topics: Numbers, Math library

// 1. Numbers
let a = 20;
let b = 121.36925;
console.log(a, b);
console.log(typeof (a, b)); //both are numbers type
//now what if I want just 2 digits after floating point
//we can use .toFixed() function for that
console.log(b.toFixed(2));
let c = b.toFixed(2);
console.log(typeof c); //but this is string type
// .toFixed() function converts number to srting type
// how can convert a to string from number?
let d = a.toString();
console.log(typeof d); //now a is string type output
// object type number
let x = new Number(10); //not useful
console.log(x);
console.log(typeof x);
//note: if anything referes to any exisiting data in heap
// the output returns true!
//example:
console.log(Boolean([])); //empty array, but memory exists so true
//no memory allocation in "null"
console.log(Boolean(null)); //false
// NOTE: Non-premitive: comparison based on reference

// 2. Math object/library
console.log(Math.abs(-12));
console.log(Math.SQRT2);
console.log(Math.PI);
console.log(Math.random()); //random number generate between 0-0.9999..
//what if we want 15-25
console.log(Math.floor(Math.random() * 11) + 15);
//formula: Math.floor(Math.random()*(max-min+1))+min
