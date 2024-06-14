/*
// Object Declaration methods

let person = {
  firstName: "jemish",
  lastName: "sakariya",
};

let person2 = {};
person2.firstName = "abc";
person2.lastName = "xyz";

let person3 = new Object();
person3.firstName = "pqr";
person3.lastName = "gfd";

console.log(person);
console.log(person2);
console.log(person3);
*/

/*
// syntax for accessing the property of an object
let p = {
  firstName: "jemish",
  lastName: "sakariya",
};

console.log(p.firstName);
console.log(p["lastName"]);

// loop using for in
for (let x in p) {
  console.log("Key:", x, " Value:", p[x]);
}
*/

/*
// delete object property
let p = {
  firstName: "jemish",
  lastName: "sakariya",
  age: 20,
  Address: "asdsf",
};

delete p.age;
delete p["Address"];
console.log(p);
*/

/*
// Nested Objects
let p = {
  firstName: "jemish",
  lastName: "sakariya",
  cars: {
    car1: "car1",
    car2: "car2",
  },
};

console.log(p.cars.car1);
console.log(p.cars["car2"]);
console.log(p["cars"]["car2"]);
*/

/*
// Nested Arrays and Objects
let p = {
  firstName: "jemish",
  lastName: "sakariya",
  cars: [
    { name: "BMW", models: ["320", "X3", "X5"] },
    { name: "Fiat", models: ["500", "Panda"] },
  ],
};

console.log(p.cars[0].name);
console.log(p.cars[1].models[1]);
*/

/*
// Object functions
let p = {
  firstName: "jemish",
  lastName: "sakariya",
  age: function () {
    return 20;
  },
};

console.log(p.age());
*/

/*
// Object Methods
let p = {
  firstName: "jemish",
  lastName: "sakariya",
  age: function () {
    return 20;
  },
};

console.log(Object.keys(p));
console.log(Object.values(p));
console.log(Object.entries(p));

// it convert array to object which hash key value pair
let obj = Object.fromEntries(Object.entries(p));
console.log(obj);

console.log(JSON.stringify(p)); // it will not stringify "object function"
*/

/*
// Object Getter and Setter
// It can secure better data quality
// It is useful for doing things behind-the-scenes

let p = {
  firstName: "jemish",
  lastName: "sakariya",
  age: 20,
  get getAge() {
    return this.age;
  },
  set setFirstName(fname) {
    this.firstName = fname;
  },
};

// "get & set" is not a function. it is "keyword".
console.log(p.getAge);

p.setFirstName = "abc";
console.log(p.firstName);
*/

/*
// Constructors
function Person(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.fun = function () {
    return this.firstName + " " + this.lastName;
  };
}

let p1 = new Person("Jemish", "Sakariya", 20);
console.log(p1.fun());
*/

/*
// Using the prototype Property
function Person(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
}

Person.prototype.createProto = "proto";

let p1 = new Person("Jemish", "Sakariya", 20);
console.log(p1.createProto);
*/

/*
// Object Iterators function
function num() {
  let i = 0;
  return {
    next: function () {
      i++;
      return { value: i, done: false };
    },
  };
}

// create an iterater
const n = num();
console.log(n.next().value);
console.log(n.next().value);
console.log(n.next().value);
*/

/*
// Sets
let set = new Set();
set.add(1);
set.add(12);
set.add(15);
set.add(3);

set.delete(15);

console.log(set.has(15));

let iterater1 = set.values();
let iterater2 = set.keys();
let iterater3 = set.entries();

for (let val of iterater1) {
  console.log(val);
}

set.forEach((val) => {
  console.log(val);
});

console.log(typeof iterater1);
console.log(set instanceof Set);
*/

/*
// Maps
let map = new Map([["one", 1]]);

map.set("two", 2);
map.set("three", 3);
map.set("four", 4);
map.set("five", 5);

console.log(map.get("one"));

map.delete("five");

console.log(map.has("five"));

let iterater1 = map.values();
let iterater2 = map.keys();
let iterater3 = map.entries();

for (let val of iterater1) {
  console.log(val);
}

map.forEach((val, index) => {
  console.log("value:", val, "value:", map.get(index));
});

console.log(map.size);
*/

//
//

/*
// Object Prototype(Properties)
let p = {
  firstName: "jemish",
  lastName: "sakariya",
  age: 20,
  Address: "asdsf",
};

// Change a property
// (object, objectPropertieKey, {change "value: "})
Object.defineProperty(p, "age", { value: 21 });
console.log(p.age);

// returns Property Name array
console.log(Object.getOwnPropertyNames(p));
*/

/*
const objEnteries = {
  name: "Jemish",
  age: 22,
  isHuman: true,
  hasSyambol: Symbol.for("Kentibhai"),
  [Symbol.for("h")]: 11,
  hasObject: { vivek: "Jemish" },
  hasNull: null,
  hasUndefined: undefined,
};

const objectArray = Object.entries(objEnteries);
console.log(objEnteries[Object.getOwnPropertySymbols(objEnteries)[0]]); // 11
console.log(Symbol.keyFor(Object.getOwnPropertySymbols(objEnteries)[0])); // h
console.log(Symbol.keyFor(objEnteries.hasSyambol)); // Kentibhai
console.log(objectArray);
console.log(objEnteries);
*/

/*
var o = {};
for (o.a of [1, 2, 3]) {
  console.log(o.a);
}
console.log(o);

for ({ x: o.a } of [{ x: 1 }, { x: 2 }, { x: 3 }]) {
  console.log(o.a);
}
*/

