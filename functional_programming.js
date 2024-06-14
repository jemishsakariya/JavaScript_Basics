// 'use strict';

/*
const arr = [1, 2, 3, 5];

function area(redius) {
  return Number((Math.PI * redius * redius).toFixed(2));
}

function cal(arr, logic) {
  const out = [];
  for (let i = 0; i < arr.length; i++) {
    out.push(logic(arr[i]));
  }
  return out;
}

console.log(cal(arr, area));
*/

// with Array.prototype we can use this function to any array
// below function like map.

// Array.prototype.cal = function (logic) {
//   const out = [];
//   for (let i = 0; i < this.length; i++) {
//     out.push(logic(this[i]));
//   }
//   return out;
// };

// console.log(arr.cal(area));

//

/*
if ("somthing") {
  function foo() {
    console.log("1");
  }
} else {
  function foo() {
    console.log("2");
  }
}
foo();
*/

/*
function foo(x, y) {
  x = x || 11;
  y = y || 31;
  console.log(x + y);
}
foo(); // 42
foo(5, 6); // 11
foo(5); // 36
// || behaves like it consider 0 as an undefined
foo(null, 6); // 17 <-- null coerces to 0
foo(0, 42); // 53 <-- Oops, not 42
console.log("---------");
function foo2(x, y) {
  x = x ?? 11;
  y = y ?? 31;
  console.log(x + y);
}
foo2(); // 42
foo2(5, 6); // 11
foo2(5); // 36
foo2(null, 6); // 17 <-- null ka to undefined to ?? right side value ley.
foo2(0, 42); // 42 <-- it consider "0".
*/

/*
const x = 11;
const y = undefined;
const z = null;

function trySomthing(x, y, z) {
  x = 0 in arguments ? x : 1;
  y = 1 in arguments ? y : 2;
  z = 2 in arguments ? z : 3;
  console.log(x, y, z);
}

trySomthing(x, y, z);
*/

/*
function foo(x = 11, y = 31) {
  console.log(x + y);
}

foo(); // 42
foo(5, 6); // 11
foo(0, 42); // 42
foo(5); // 36
foo(5, undefined); // 36 <-- `undefined` is missing
foo(5, null); // 5 <-- null coerces to `0`
foo(5, true); // 5 <-- true coerces to `1`
foo(5, NaN); // NaN
*/

/*
function bar(val) {
  console.log("bar called!");
  return y + val;
}

function foo(x = y + 3, z = bar(x)) {
  console.log(x, z);
}

// var y = 5;
let y = 5;
foo(); // "bar called"
// 8 13
foo(10); // "bar called"
// 10 15
y = 6;
foo(undefined, 10); // 9 10

foo(null, 10); // null 10
foo(true, 10); // true 10
*/

/*
let x = 1;

// function f() {}

if (function f() {}) {
  x += typeof f;
}
console.log(x);
*/

