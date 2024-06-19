import { log } from "node:console";
import { appendFile, writeFile } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

appendFile(
  join(__dirname, "write.txt"),
  `
const a = 'Kasun';
const c =[1,2,3,4,5,6,];
console.log(a);
console.log(c[2]);
`,
  (err) => {
    if (!err) {
      log("document written");
    }
  }
);
