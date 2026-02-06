//READ THE COMMENTS TO UNDERSTAND
//topics: Scope, Closure, HOF

// 3 types (let & const):
// 1. GLobal --> accessible to all
// 2. Functional --> accessible only to that function
// 3. Scope --> accessible only to that scope

// var --> only respects the functional scope

let a = 10; // global

if (true) {
  console.log(a); // accessible inside a scope

  let b = 2;
  console.log(b);
}

// console.log(b); // inaccessible --> because declared in scope level

function show() {
  console.log(a); // accessible inside a functional scope
}

show();

let global = 500;

function any() {
  let global = 200; // without this declared, prints 500
  console.log(global);
}

any(); // output is 200
// but why?
//because the function checks first in own scope then outer scope, if exists in own scope, then that will be used

// Closure

//example
function outer() {
  let count = 1; // outer variable for inner function

  function inner() {
    count = count + 1;
    console.log(count);
    //return 10;
  }

  // return inner(); //if return like this then will be "undefined" unless inner function returns something
  return inner; //now outer function has the reference of inner
}

const fn = outer(); //fn now holds the reference of inner, can call fn as functional call --> fn()
// console.log(fn);
fn(); //2
fn(); //3

// What is closure then?
// A function that remembers variables from its outer scope even after the outer function finished executing

// real world use case example

// problem?
// let balance = 500;
// balance += "random"; // developer accidently put string in here
// console.log(balance); //500random
// this happens becuase of developer having direct access to the balance variabel

// problem code example

// let user = {
//   balance: 500,
//   deposit: function (amount) {
//     if (typeof amount === "number" && amount > 0) {
//       this.balance += amount;
//     }

//     return this.balance;
//     // console.log(this);
//   },
// };

// console.log(user.deposit(200));

// // user.balance = "slkd"; //stil issue of having access even after checkpoint, string is being passed

// solution
// making the "balance" access private by giving scope

function createAcc() {
  return {
    // same as writing 'let user ='
    balance: 500,
    deposit: function (amount) {
      if (typeof amount === "number" && amount > 0) {
        this.balance += amount;
      }

      return this.balance;
      // console.log(this);
    },
  };

  // return user; // no need of this if writing return above
}

const customer = createAcc();
console.log(customer);

// syntax will be quite like this in redux

// HOF: Higher Order Function

// a function that returns another function ref.

function double() {
  function execute() {
    console.log("hey");
  }
  return execute;
}

const r = double();
r();
