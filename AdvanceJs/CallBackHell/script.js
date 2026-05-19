// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// test1();
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);

// function test1() {
//   setTimeout(() => {
//     console.log("I am Test Function");
//   }, 1);
// }

// server
function willDoSomething(p, q, add) {
  console.log("Doing Something");

  let m = p + 10;
  let n = q + 10;

  console.log(add(m, n));
}

// Database
function sum(a, b) {
  let x = a + 1;
  let y = b - 1;

  return x + y;
}

willDoSomething(5, 6, sum);

willDoSomething(5, 6, (r, s) => {
  return r * s;
});