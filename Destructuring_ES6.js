// https://www.codinn.dev/tricky-javascript/es6789-code-snippets-interview-questions

/*
const myName = "Oluwatobi Sofela";

function spellName(a, b, c) {
  return a + b + c;
}

console.log(spellName(...myName));

console.log(spellName(...myName[3]));

console.log(spellName([...myName]));

console.log(spellName({ ...myName }));
*/

/*
// 
var x = 200,
  y = 300,
  z = 100;
var o1 = { x: { y: 42 }, z: { y: 56 } };

({ z: y = { y: z } } = o1);
// y = { y: 56 }
({ y: x = { y: y } } = o1);
// x = { y: y }
({ x: z = { y: x } } = o1);
// z = { y: 42 };

console.log(x.y, y.y, z.y);
console.log(o1);
*/

/*
// log every value
const allStates = [
  { isoCode: "IN", name: "India" },
  { isoCode: "CA", name: "Canada" },
];

const [{ isoCode: isoCode = "a" } = { isoCode: "b" }] = allStates;
console.log(isoCode);

const [{ isoCode: firstCode = "c" } = {}] = allStates;
console.log(firstCode);
*/

/*
let a = {};
let b = { key: "b" };
let c = { key: "c" };
let d = [11];

a[b] = 123;
a[c] = 456;
a[d] = 789;

console.log(a[b]);
console.log(a[c]);
console.log(a[d]);
console.log(a);
*/

/*
let obj1 = { key: "value" };
let obj2 = obj1;
let obj3 = obj2;

obj1.key = "new value";
obj2 = { key: "another value" };

console.log(obj1.key, obj2.key, obj3.key);
*/

/*
let x = [1, 2, 3];
let y = [1, 2, 3];
let z = y;

console.log(x == y);
console.log(x === y);
console.log(z == y);
console.log(z == x);
*/

/*
var x = 0;
for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    x++;
    console.log(x);
  }, 1000);
}
*/

/*
let obj = { name: "John", age: 25 };
let newObj = { ...obj, age: 30 };

console.log(obj.age);
console.log(newObj.age);
*/

/*
const add = (a = 1, b = 2) => a + b;
console.log(add());
console.log(add(5));
console.log(add(undefined, 10));
console.log(add(null, 10));
console.log(add(false, 10));
*/

/*
console.log(typeof null);
console.log(typeof undefined);
console.log(null === undefined);
console.log(null == undefined);
*/

/*
const companies = [
  { id: "1", name: "Facebook" },
  { id: "2", name: "Apple" },
  { id: "3", name: "Google" },
];

companies.sort((a, b) => (a.name > b.name ? -1 : 1));
console.log(companies);
*/

/*
console.log(typeof 42);
console.log(typeof "Hello");
console.log(typeof true);
console.log(typeof [1, 2, 3]);
console.log(typeof { name: "John", age: 25 });
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof function () {});
*/

/*
const getType = (val) => (val === null ? null : val?.constructor.name);

console.log(getType(42));
console.log(getType("Hello"));
console.log(getType(true));
console.log(getType([1, 2, 3]));
console.log(getType({ name: "John", age: 25 }));
console.log(getType(null));
console.log(getType(undefined));
console.log(getType(function () {}));

//The function should print "array" for "[]" and "null" for "null" types.
*/

/*
function calculateSum() {
  console.log(result);
  var num1 = 5;
  let num2 = 10;
  const num3 = 15;
  var result = num1 + num2 + num3;
}

calculateSum();
*/

/*
// !
let x = 10;

function outer() {
  console.log(x);

  if (false) {
    var x = 20;
  }
}

outer();
*/

/*
const avengers = [
  "Natasha Romanoff",
  [["Tony Stark", "Pepper Potts"], "James Rhodes"],
  ["Steve Rogers", "Sam Wilson"],
];

const [, [, [, here]]] = avengers;

console.log(here);
*/
