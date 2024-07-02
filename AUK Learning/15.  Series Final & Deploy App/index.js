import { createServer } from "node:http";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { pool } from "workerpool";
import { error } from "node:console";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const port = process.env.PORT || 4000;

const fileReadPool = pool(join(__dirname, "file-read-workers.js"));

const server = createServer(async (req, res) => {
  res.writeHead(200, { "Content-type": "text/html" });
  if (res.url === "/") {
    //read file and sedn it

    fileReadPool
      .exec("html", ["index.html"])
      .then((result) => res.end(result))
      .catch((err) => {
        error(err);
        res.end();
      })
      .then(() => fileReadPool.terminate);
  } else if (req.url === "/about") {
    //read file and sedn it

    fileReadPool
      .exec("html", ["about.html"])
      .then((result) => res.end(result))
      .catch((err) => {
        error(err);
        res.end();
      })
      .then(() => fileReadPool.terminate);
  }
});

server.listen(port, () => console.log("server running.... " + port));
