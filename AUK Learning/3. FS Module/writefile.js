import { log } from "node:console";
import { writeFile } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url"; 

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

writeFile(
  join(__dirname, "write.txt"),
  "This is write file",
  {
    encoding: "utf-8",
  },
  (err) => {
    if (err) {
      log(err);
    }
  }
);
