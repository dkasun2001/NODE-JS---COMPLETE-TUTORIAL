// const data = Buffer.from("Kasun")
// console.log(data); //  <Buffer 4b 61 73 75 6e>

//  0100 1011 -> 4b
//  0110 0001 -> 61
//  0111 0011 -> 73

// console.log(data.toString("utf-8"));

/* const data = Buffer.alloc(3);
data.write("kasun");
console.log(data);
console.log(data.toString("utf-8")); */

import { log } from "node:console";
import { createReadStream, createWriteStream, readFile } from "node:fs";
import { createServer } from "node:http";
import { Transform } from "node:stream";

/* const server = createServer((req, res) => {
  res.writeHead(200, "Content-type:text/plain");
  readFile("./myfile.txt", (err, data) => {
    if (!err) {
      res.end(data);
    } else {
      res.end();
    }
  });
});

server.listen(4000, () => log("server running....")); */

//----------------------------------------

/* const editString = new Transform({
  transform(chunk, encode, callback) {
    log(chunk);
    callback(null, chunk.toString().toUpperCase());
  },
});

const readStrem = createReadStream("./myfile.txt", { highWaterMark: 48 });
const writeStrem = createWriteStream("./dinu.txt");

// readStrem.on("data", (chunk) => {
//   log(chunk);
//   writeStrem.write(chunk);
// });

readStrem.pipe(editString).pipe(writeStrem); */

//------------------------------------------

const readStrem = createReadStream("./myfile.txt");

const server = createServer((req, res) => {
  res.writeHead(200, "Content-type:text/plain");
  readStrem.pipe(res);
});

server.listen(4000, () => log("server running...."));
