// 1. Create a function that takes a number and returns a function that multiplies its argument by the number passed to the first function.
// For example, let timesThree = multiplyBy(3); console.log(timesThree(5)); // logs 15

// 2. Create a function that takes a string and returns a function that logs the string to the console.
// The returned function should also take a number and repeat the string that many times before logging it.

function multiplyBy(num1) {
  return function mul(num2) {
    return num1 * num2;
  };
}

let timesThree = multiplyBy(3);
console.log(timesThree(5));

//

function fun1(str) {
  return function logString(num) {
    for (let i = 0; i < num; i++) {
      console.log(str);
    }
  };
}

let s = fun1("abc");
s(5);
