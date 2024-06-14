/*
// 1.Write a program that demonstrates the difference between global and local scope using var and let.
// Declare a variable inside a function using var and another variable inside the same function using let.
// Try to access these variables from outside the function and explain your observations.

function Task1() {
  var a = 1;
  let b = 2;
}
Task1();
console.log(a);
console.log(b);

// we can not access function local scope var and let outside function because both have local scope
*/

/*
// 2.Write a program that uses const to declare an array or object and modifies it.
// Explain why the program does or does not throw an error.

const arr = [1, 2, 3, 4, 5];
const obj = {
  firstName: "jemish",
  lastName: "sakariya",
};

arr[0] = 111;
obj.firstName = "abc";

console.log(arr);
console.log(obj);

// In const we can not change assigned data type.
// program does not throw error because const arr & const obj is assigned as an "object" as a Data Type.
// and I am not changing the data type here, I am modifing the arr and obj "inside value" not assigned value.
*/

/*
// 3.Write a program that uses nested functions to demonstrate how scope chain works.
// Declare a variable in the outer function and try to access it from the inner function.
// Then, declare a variable in the inner function and try to access it from the outer function. Explain your observations.

var a = 1; // var declared global scope
let b = 2; // let declared global scope

function Task3() {
  var a = 10; // var declared locally inside Task1() function scope
  console.log(a); // prints a = 10 accessed from local scope

  function nestedFun() {
    let a = 100; // let declared locally inside nestedFun() function scope
    console.log(a); // prints a = 100 accessed from local scope of nesetedFun()
  }
  nestedFun(); // after a print nestedFun() invoke
}

console.log(a); // first, a = 1 value accessed from global scope
console.log(b); // second, b = 2 value accessed from global scope
Task3(); // then Task1() function invoke
*/

/*
// 4.Write a program that uses the "let" keyword to create a block-scoped variable.
// Demonstrate how this variable is inaccessible outside of the block it was declared in.

{
  var a = 1;
  let b = 2;
  const c = 3;
}

console.log(a); // access
console.log(b); // not access
console.log(c); // not access

// In Block scope we can't access the let & const variable
// But we can access the var outside the block scope
*/

/*
// 5. Write a program that uses the "const" keyword to declare a variable and
// explain the difference between reassigning the variable and modifying its value.

const a = 1;

a = 10;

console.log(a);

// we can not modify and reassign const value
*/
