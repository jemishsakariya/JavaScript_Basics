/*
// for loop
for (let i = 0; i < 3; i++) {
  console.log(i);
}

// while loop
let i = 0;
while (i < 3) {
  console.log(i);
  i++;
}

// do - while loop always execute once
let idx = 0;
do {
  console.log(idx);
  idx++;
} while (idx < 3);
*/

/*
// for in is perform in objects
// for in is iterate and give "index or key"
let p = {
  firstName: "jemish",
  lastName: "sakariya",
};

for (let key in p) {
  console.log("Key:", key, " Value:", p[key]);
}

// for of is perform in arrays
// for of iterate and give "value"
let arr = [4, 3, 5, 9, 1];

for (let val of arr) {
  console.log(val);
}
*/

// const user = [
//   { fname: "jemish", age: 20 },
//   { fname: "jemish", age: 10 },
//   { fname: "jemish", age: 22 },
//   { fname: "jemish", age: 25 },
//   { fname: "jemish", age: 10 },
//   { fname: "jemish", age: 20 },
// ];

// const ans = user.reduce(function (acc, curr) {
//   if (acc[curr.age]) {
//     acc[curr.age] = ++acc[curr.age];
//   } else {
//     acc[curr.age] = 1;
//   }
//   return acc;
// }, {});

// console.log(ans);

// const user = [
//   { fname: "jemish", age: 20 },
//   { fname: "jay", age: 10 },
//   { fname: "vivek", age: 22 },
//   { fname: "nishil", age: 25 },
//   { fname: "gopal", age: 10 },
//   { fname: "ashish", age: 20 },
// ];

// const ans = user.reduce(function (acc, curr) {
//   if (curr.age > 20) {
//     acc.push(curr.fname);
//   }
//   return acc;
// }, []);

// console.log(ans);
