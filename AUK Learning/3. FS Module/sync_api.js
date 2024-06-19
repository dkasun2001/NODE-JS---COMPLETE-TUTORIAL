import { log } from "node:console";
import {
  readFile,
  writeFile,
  appendFile,
  rmdir,
  rm,
  readFileSync,
  writeFileSync,
  appendFileSync,
  rmSync,
} from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/* const data = readFileSync(join(__dirname, "read.txt"), {
  encoding: "utf-8",
});

log(data); */

writeFileSync(
  join(__dirname, "write.txt"),
  `
const c ="Kasun";
`
);

appendFileSync(
  join(__dirname, "write.txt"),
  `
hi wtf
`
);

// rmSync(join(__dirname, "write.txt"));
