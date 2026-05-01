// this is callback function
let abc = function () {
  console.log("Hello World");
};
console.log(abc);

abc();
// now, we dont use let in callback function we use const

const pplo = function c(y, z) {
  return y + z;
};
console.log(pplo(2, 6));

const arrowfun = () => {
  console.log("I am arrow function");
};
arrowfun();
const addarrow = (a, b) => a + b;

console.log(addarrow(8, 9));

const arrowname = name => "Hello " + name;

console.log(arrowname("ravi"));
