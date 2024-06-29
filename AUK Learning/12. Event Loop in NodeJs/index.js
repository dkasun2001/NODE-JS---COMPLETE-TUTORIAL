import { readFile } from "node:fs";

console.log("Kasun 1");
console.log("Kasun 2");
console.log("Kasun 3");

setTimeout(() => {
  console.log("time out 1");
}, 0);

setImmediate(() => console.log("immediate"));

/* readFile("./AUK Learning/12. Event Loop in NodeJs/kasun.txt", (err, data) => {
  if (err) {
    console.log(err);
  } else {
    console.log(data.toLocaleString());
  }
}); */

console.log("Kasun 4");

/* const a = new Promise((resolve, reject) => {
  resolve("hi");
});
a.then((data) => console.log(data)); */

console.log("Kasun 5");
console.log("Kasun 6");

setTimeout(() => {
  console.log("time out 2");
}, 0);

console.log("Kasun 7");

