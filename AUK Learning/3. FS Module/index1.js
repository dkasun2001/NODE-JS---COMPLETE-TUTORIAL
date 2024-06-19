import { dirname, join } from "node:path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import { readFile } from "node:fs";

readFile(join(__dirname, "myname.txt"), "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  }
  //   console.log(data.toString());
  console.log(data); // utf-8 dunnna nisa .toString() oni na
});
