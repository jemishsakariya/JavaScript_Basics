// Write a function that takes an array of numbers and returns the second largest number in the array.

function secondLargestNum(arr) {
  let max = -1;
  let secondLast = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      secondLast = max;
      max = arr[i];
    } else if (arr[i] > secondLast && arr[i] != max) {
      secondLast = arr[i];
    }
  }

  return secondLast;
}

let arrOfNumber = [5, 94, 88, 63, 41, 92];
console.log(secondLargestNum(arrOfNumber));
