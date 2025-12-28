//READ THE COMMENTS TO UNDERSTAND

// 1. VARIABLE

//declared with keyword "let"
let name = "Zarab"; //type not needed to declared (e.g. int, string) like in c, java etc

//print with "console.log()"
//console.log(name);

//output in terminal -> node "filename.js"

let age = 22;
console.log(name, age);

//can we change varbiables value?
name = "Efti";
console.log(name); //output -> name changed!
//so we can change variables value.

//what if we cant constant value?

const password = 1234;
console.log(password);

//Can we change value of "const" variables?

//password = 6969;
//console.log(password);  //eror showed!
//so we can't change value with "const" variables.

// 2. DATA TYPES

// a. Primitive data type
//number, string, boolean, undefined, null, bigint, symbol

//Number
let a = 80;
console.log(a);

//String
let food = "beef"; //single '' is also valid!
console.log(food, "is tasty!");

//Boolean (true/false)
let green = true;
let orange = false;

console.log(green, orange);

//Undefined
let user;
console.log(user); //as varible value not defined.
//error if: "const user;" would be error as const requires a fixed value.

//Null
//intentionally to assign no value in any variable.
let value = null;
console.log(value);

//BigInt (bigger than 8bit memory space)
//for much bigger numbers
let num = 33248483785234088947420n; //write "n" at end!
console.log(num);
console.log(typeof num); //to check the "type" of variable.

//Symbol
const id1 = Symbol("id");
console.log(id1); //generates a unique value
//will be explained later

// b. Non-Primitive data type
//array, object, function

//Array
let arr = [10, 15, "anything", false];
console.log(arr);
console.log(typeof arr); //array is object type in js, even all non-primitive data types are.

//Object (key:value format)
let acc = {
  name: "anything",
  age: 10,
  account: false,
};
console.log(acc); //output in key:value format too
console.log(typeof acc); //will show object type

//Function
function add() {
  x = 2;
  y = 3;
  console.log(x + y);
}
add(); //calling the function

//Function can be stored in variable in javascript!!
let h = function greet() {
  console.log("Hello!");
};
console.log(h); //just the value type of h will be shown.
h(); //this way the function inside varible "h" will be called.

// 3. Mutable/Immutable

// primitive data types are immutable in js
//meaning values of variables can't be changed!

let p = 100;
p = 200;
console.log(p); //here p is 200
//it shows p's value is changed but it's not whats behind,
//actually memory of 100 is still there just another memory space with data 200 is created.

// non-primitive data types are mutable.
let m = [1, 2, 3, 4];
m.push(5); //append with push()
console.log(m);
m[0] = 2; //proof of mutability, particular value changed
console.log(m);
