let str = "paradox";
let n = 3;

let nstr = "";
for (let i = 0; i < n; i++) {
  nstr += str.charAt(i);
}

let rev = "zyxwvutsrqponmlkjihgfedcba";

for (let i = n; i < str.length; i++) {
  nstr += rev[str.charAt(i).charCodeAt() - "a".charCodeAt()];
}

console.log(nstr);
