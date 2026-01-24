//READ THE COMMENTS TO UNDERSTAND
//topics: Function

//Why Function?
// to reuse chunk of code multiple times without copying whole chunk

// Function syntax
// type 1
function greet(name) {
  const msg = `Hello ${name}`;
  return msg;
}

const greetFor = greet("Jhonny");
console.log(greetFor);

function addNum(x, y) {
  return x + y;
}

console.log(addNum(2, 3));

//type 2
const addNumber = function (p, q) {
  //function inside a variable
  return p + q;
};

console.log(addNumber(2, 3));

// type 3: arrow function
const mulNumber = (a, b) => a * b;

console.log(mulNumber(2, 3));

//values passed inside the function name or keyword are called parameteres! (ik yk)

// Rest parameters, looks like spread operator
function sumNum(...num) {
  let t = 0;
  for (let n of num) {
    t += n;
  }
  return t;
}

console.log(sumNum(6, 8));
console.log(sumNum(1, 2, 3, 4, 5)); //as many numbers you can give
// reason to use Rest paramters is, you dont need to define number of parameters each time

// Spread vs Rest
// spread operator: expands/unpacks
// used in arrays, objects
const arr1 = [1, 33, 45, 2, "asf"];
const arr2 = [false, 234, 34, 2, 9];

const a = [arr1, arr2];
const arr = [...arr1, ...arr2]; //unpacks two arras
console.log(a);
console.log(arr);
// we have seen spread to copy before

// rest operator: collects/packs
// used in function
function show(...arr) {
  // collects sepoarate nubmers that will be passed when function called
  console.log(arr1);
}

const z = show(true, "rwer", 3, 43, 34, false);
console.log(z);

// How to find out which is which?
// on right side = Spread ; on left side = Rest
// const copy = [...org] ; const[1, 2, ...num]= arr
// function call = Spread -> myFunction(...arr)
/// functiio definition = Rest -> function myFunction(...params){ }
