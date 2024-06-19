// const myName = "Kasun";
// console.log(myName);

//const os = require("os"); //old package import method
//const path = require("path");//old package import method

/* import os from "os"; //new package import method
import path from "path"; //new package import method */
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// console.log(os.platform());
// console.log(os.version());

console.log(__dirname);
console.log(__filename);

console.log(path.basename(__filename));
console.log(path.extname(__filename));
console.log(path.parse(__filename));
