//READ THE COMMENTS TO UNDERSTAND
//topics: Object

// object: copy by reference, meaning if the reference/element of one
// is changed, then the valud for other one will be changed too

// in object data is stored as key: value pairs

//object with properties
let user = {
  name: "IShowSpeed",
  age: 50,
  isStudent: true,
  1: "any", // "1" actually
};
// behind the scenes, keys are also strings

console.log(typeof user);

// CRUD operations
// create object
const car = {}; //empty object

// 'user' object is a object with properties
console.log(user);

// Accessing properties
console.log(user.name); //will only show name property
console.log(user["age"]); // inside [] must be in quotations: " "

// Updating & Adding properties
user.age = 60;

user.favourite = "Messi"; //new property added
console.log(user);

// Delete properties
delete user.isStudent;
console.log(user);

// Object with methods (function inside object)

user = {
  name: "IShowSpeed",
  age: 50,
  isStudent: true,
  greeting: function () {
    console.log(`hey, my name is ${this.name}.`);
    return 69;
  },
};

user.greeting();
console.log(user);
let val = user.greeting(); // stored in a variable to see whats returned
console.log(val);

// Looping over objects properties (iteration)
// for-in loop
// for (const key in user) {
//   console.log(key); //just the keys inside object
// }

for (const values in user) {
  console.log(user[values]); //'values' is string here
}

// for-of loop can't be used in objects like this
// WHY?
// mainly by default desing reasons of JS
// for-of → needs Symbol.iterator
// Plain objects don’t have it → cannot use for-of
// Why for-in works on objects?
// Because for-in is not an iterator loop, it is a property enumeration loop.

// right way of using for-of in objects
for (const val of Object.values(user)) {
  console.log(val);
}

for (const key of Object.keys(user)) {
  console.log(key);
}

for (const [key, val] of Object.entries(user)) {
  console.log(key, val);
}

// Nested object
user = {
  name: "IShowSpeed",
  age: 50,
  isStudent: true,
  greeting: function () {
    console.log(`hey, my name is ${this.name}.`);
    return 69;
  },

  address: {
    //this is a object inside user object
    city: "Alabama",
    country: "USA",
  },
};

//Accessing property of nested object
console.log(user.address);
console.log(user.address.city);

// As we know: Objects are copy by reference
// const user2 = user; // this is shallow copy
// if we write like this, then any change in user2 will be done in user too: reference changed for both!

// Spread Operator: for one level independent copy
const user2 = { ...user };

user2.name = "Ronaldo";
console.log(user2);
console.log(user);

// but one level independent means?
user2.address.city = "Ohio";
console.log(user.address.city); //city for nested object of user is changed too!
// meaning one level reference is independent, nested ones aint

// solution for deep level independence

const student = {
  name: "Alex",
  age: 25,
  info: {
    country: "Germany",
    score: 69,
  },
};

const user3 = structuredClone(student); //this cant clone functions, throws error if function in main object

user3.info.score = 75;
console.log(student.info.score);
console.log(user3.info.score);

// Symbols can also be as Keys in objects

const sym = Symbol("id");

const user4 = {
  name: "Jhonny",
  age: 22,
  0: false,
  [sym]: "datas", // in [ ] for symbol keys
};

console.log(user4[sym]); // this wouldnt work with "" inside [] -> user4.["sym"] wont work!
