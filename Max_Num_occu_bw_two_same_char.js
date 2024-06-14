let str = "baaabcddc";
let count = -1;
let max = -1;

for (let i = 0; i < str.length; i++) {
  for (let j = i + 1; j < str.length; j++) {
    if (str.charAt(i) == str.charAt(j)) {
      count = j - i - 1;
    }
  }
  if (max < count) max = count;
}

console.log(max);
