// Write a program to calculate the total price of your phone purchase. You will keep purchasing phones (hint: loop!) until you
// run out of money in your bank account. You’ll also buy accessories for each phone as long as your purchase amount is below
// your mental spending threshold.

// • After you’ve calculated your purchase amount, add in the tax, then print out the calculated purchase amount, properly formatted.
// • Finally, check the amount against your bank account balance to see if you can afford it or not.
// • You should set up some constants for the “tax rate,” “phone price,” “accessory price,” and “spending threshold,” as well as a
// variable for your “bank account balance.”
// • You should define functions for calculating the tax and for formatting the price with a “$” and rounding to two decimal places.

function twoPointFix(val) {
  return val.toFixed(2);
}

function formatVal(val) {
  return "$" + twoPointFix(val);
}

function tax(val) {
  return val * 0.018;
}

let arrOfPhone = [1000, 2000, 1500, 1900];
let accessoryPrice = [100, 200, 150, 190];
let bankBalance = 40000;
let mentalThreshold = 20000;
let totalPrice = 0;

let i = 0;
while (mentalThreshold >= 0) {
  let temp = mentalThreshold - arrOfPhone[i] - accessoryPrice[i];
  if (temp <= 0) {
    break;
  } else {
    bankBalance -= arrOfPhone[i] - accessoryPrice[i];
    mentalThreshold -= arrOfPhone[i] - accessoryPrice[i];
    totalPrice += arrOfPhone[i] - accessoryPrice[i];
    i++;
  }
  if (i == arrOfPhone.length) i = 0;
}

console.log("Your current Bank Balance is: " + formatVal(bankBalance));
console.log("Your Remaining Threshold Limit is: " + formatVal(mentalThreshold));
console.log("Your Spended Money is: " + formatVal(totalPrice));

console.log("Your Purchase Tax is: " + formatVal(tax(totalPrice)));

if (mentalThreshold - tax(totalPrice) <= 0) {
  console.log("This Purchase is Exceed Your Limit");
} else {
  bankBalance -= tax(totalPrice);
  mentalThreshold -= tax(totalPrice);
  totalPrice += tax(totalPrice);
  console.log("Your Perchased Money is: " + formatVal(totalPrice));
}
