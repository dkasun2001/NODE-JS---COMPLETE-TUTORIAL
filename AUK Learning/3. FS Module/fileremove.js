import { log } from "node:console";
import { rm } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

rm(join(__dirname, "write.txt"), (err) => !err && log("file is deleted"));
