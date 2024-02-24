/*  Create a faulty caclulator 
1. it take two number from user.
2. performs as following:

+ --> -
* --> +
- --> /
/ --> **
with 10% of faultiness

*/

let random = Math.random();
console.log(random)

let a = prompt(`Enter first number: `);
let c = prompt(`Enter operation: `);
let b = prompt(`Enter second number: `);

let obj = {
  "+": "-",
  "*": "+",
  "-": "/",
  "/": "**",
};

if (random > 0.3) {
  alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
} else {
  c = obj[c];
  alert(`The result is ${eval(`${a} ${c} ${b}`)}`);
}
