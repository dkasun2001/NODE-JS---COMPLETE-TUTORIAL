import { log } from "node:console";
import { createServer } from "node:http";
import { pageSelect } from "./pageSelect.js";
import { URL } from "node:url";

createServer((req, res) => {
  pageSelect(req.url, res);
}).listen(4000, () => log("server running"));
