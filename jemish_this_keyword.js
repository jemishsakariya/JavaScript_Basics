/*
1. Explain the different values `this` can take on in the global scope depending on the JavaScript environment (browser vs. Node.js).

2. Describe the behavior of `this` inside regular functions under both strict and non-strict modes.

3. What is "this substitution" in the context of non-strict mode JavaScript functions, and how does it work?

4. How does `this` behave within arrow functions compared to regular functions? Explain the concept of lexical scope in relation to this behavior.

5. In the context of object methods, what does this typically refer to? Provide an illustrative example.

6. Explain how call, apply, and bind methods can manipulate the value of `this` within a function.
*/

// 1.
// console.log(this); in Node.js points to the module in this file which is "{}".
// and in browser it points to the window object "window{}".

// 2.
/*
function thisBehaviorInsideFun() {
  // non - strict
  console.log(this); // globleThis
}
thisBehaviorInsideFun();

function thisBehaviorInsideStrictFun() {
  "use strict";
  console.log(this); // undefine
}
thisBehaviorInsideStrictFun();
*/

// 3.
// non-strict mode JavaScript functions in this substitution means value of this is depends of it's lexical enclousing parent object.
// If a function is called with this set to undefined or null , this gets substituted with globalThis

// 4.
/*
function regularFun() {
  console.log(this);
}
regularFun();

const arrowFun = () => {
  console.log(this);
};
arrowFun();

// inside regular function this is get substituted with globleThis
// above example inside arrow function it does not bind with "this", so it inherit the "this" binding from the surrounding scope
// in our case it is module scope.
*/

// 5.
/*
const obj = {
  a: 10,
  exMethod: function () {
    console.log(this); // it points to "obj" Object.
  },
};

obj.exMethod();
*/

// 6.
/*
const a = {
  name: "jemish",
};

function printName(lastName) {
  console.log(this.name, " ", lastName);
}

// it binds the function inside this to a object.

printName.call(a, "sakariya"); // in function parameter pass as an argument
printName.apply(a, ["sakariya"]); // in function parameter pass as an array

const newFun = printName.bind(a); // // in function parameter pass as an argument and it also returns new function
newFun("sakariya");
*/
