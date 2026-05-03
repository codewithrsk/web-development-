"use strict";

var a, b, c;

a = 10;
p = 10;

console.log(a);
console.log(b);
console.log(c);

b = 15;

console.log(a);
console.log(b);
console.log(c);

c = 20;

console.log(a);
console.log(b);
console.log(c);

abc();

function abc() {
  console.log("I am Function");
}
function submit() {
  console.log("buton is clicked");
}
let sub = (a, b) => a - b;
