// Synchronous callbacks::

// 1. Write a function that takes an array and a callback function as arguments,
//    and returns a new array with each element of the original array doubled by the callback function

const arr = [1, 2, 3, 4];

function doubleValue(arrElement) {
  return arrElement * 2;
}

function doubledArr(arr, cal) {
  const output = [];
  for (let i = 0; i < arr.length; i++) {
    output.push(cal(arr[i]));
  }
  return output;
}

console.log(doubledArr(arr, doubleValue));

// 2. Write a function that takes two numbers and a callback function which perform addition as arguments, and returns the result of
// applying the callback function to the two numbers.

function printSum(sum) {
  console.log(sum);
}

function sum(a, b, callback) {
  let sum = a + b;
  callback(sum);
}

sum(1, 2, printSum);

// 3. Write a function that takes an array and a callback function to check even number as arguments, and returns a new array with
// only the elements of the original array that satisfy the callback function.

const numberArr = [1, 2, 3, 4, 5, 6];

function checkArrNumEvenOrOdd(num) {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

function checkEvenNum(arr, callback) {
  const narr = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      narr.push(arr[i]);
    }
  }
  return narr;
}

console.log(checkEvenNum(numberArr, checkArrNumEvenOrOdd));

// 4. Write a function that takes a string and a callback function which logs character to console as arguments, and calls the callback
// function for each character in the string

function printChar(char) {
  console.log(char);
}

function mainString(str, callback) {
  for (let i = 0; i < str.length; i++) {
    callback(str.charAt(i));
  }
}

mainString("abc", printChar);

//
// Asynchronous callbacks::
//

// 1. Write a function that takes a number and a callback function as arguments,
// and calls the callback function after the given number of milliseconds.

function printCallbackFun() {
  console.log("Callback Executed after given time");
}

function firstFun(num, callback) {
  setTimeout(() => {
    callback();
  }, num);
}

firstFun(2000, printCallbackFun);

// 2. Write a function that takes an array of URLs and a callback function as arguments,
// and calls the callback function with an array of the responses from each URL.

const arrOfURL = [
  "https://dummyjson.com/products/2",
  "https://dummyjson.com/products/2",
  "https://dummyjson.com/products/3",
];

function printResponse(result) {
  console.log(result.title);
}

async function responseOfURL(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    const data = await fetch(arr[i]);
    const res = await data.json();
    callback(res);
  }
}

responseOfURL(arrOfURL, printResponse);

// 3. Write a function that takes a number and a callback function as arguments, and calls the callback function repeatedly
// every second, until the given number of seconds has elapsed.

function funCalled() {
  console.log("Called");
}

function displayNumForGivenTime(num, callback) {
  const interval = setInterval(() => {
    num = num - 1000;
    if (num <= 0) {
      clearInterval(interval);
    }
    callback();
  }, 1000);
}

displayNumForGivenTime(3000, funCalled);

// 4. Simulate any real-life task using callback, first do nesting which should resembles pyramid of doom.
// Then remove the callback hell using callback itself(dont use promise).

function makeDough(callback) {
  setTimeout(() => {
    console.log("make Dough");
    callback();
  }, 1500);
}

function getSouce(callback) {
  setTimeout(() => {
    console.log("Add Souce");
    callback();
  }, 500);
}

function addCheese(callback) {
  setTimeout(() => {
    console.log("Add Chesse");
    callback();
  }, 1000);
}

function pizzaReady() {
  setTimeout(() => {
    console.log("Your Pizza is ready");
  }, 1600);
}

// callback hell
makeDough(function () {
  getSouce(function () {
    addCheese(function () {
      pizzaReady();
    });
  });
});

// removed callback hell
function creatDoughFun() {
  makeDough(getSouceFun);
}

function getSouceFun() {
  getSouce(addCheeseAndGetPizza);
}

function addCheeseAndGetPizza() {
  addCheese(pizzaReady);
}

creatDoughFun();

// 5. since we can solve callback hell issue using callback itself with some refactoring why we need something like promise,
// like what major issue callback still have even after refactoring.

// ans => promises has mode readability of code
// In callback we loose inversion of control for example pizzaReady() is depent on addCheese() and it depend on getSouce()
// in this scenario we loose control over function and if there is Error then we dont know where is Error is occured.
// promises can handle error more effectively using either try-catch or .catch()
