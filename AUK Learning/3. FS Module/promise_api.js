import { log } from "node:console";
import { readFile, writeFile, appendFile, rmdir, rm } from "node:fs/promises";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/* readFile(join(__dirname, "read.txt"), {
  encoding: "utf-8",
})
  .then((data) => log(data))
  .then((err) => log(err)); */

/* const writefun = async (data) => {
  try {
    await writeFile(join(__dirname, "write.txt"), data, {
      encoding: "utf-8",
    });
  } catch (error) {
    log(error);
  }
};

writefun("this hi"); */

/* appendFile(
  join(__dirname, "write.txt"),
  `
dinsusha kasun
`
)
  .then((res) => log(res))
  .catch((err) => log(err)); */

rm(join(__dirname ,"write.txt"))
  .then((res) => res)
  .catch((err) => log(err));
