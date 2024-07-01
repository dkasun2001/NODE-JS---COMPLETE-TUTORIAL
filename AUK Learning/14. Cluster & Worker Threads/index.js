// ------------------------------------Cluster

/* import { log } from "node:console";
import { createServer } from "node:http";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { readFileSync } from "node:fs";

//  import { cpus } from "node:os";
// log(cpus());
// log(cpus().length);

import Cluster from "node:cluster";
import process from "node:process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const port = process.env.PORT || 4000;

if (Cluster.isPrimary) {
  log(`Primary ${process.pid} is running`);

  Cluster.fork();
  Cluster.fork();

  Cluster.on("exit", (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  const server = createServer((req, res) => {
    if (req.url === "/") {
      res.writeHead(200, { "Content-type": "text/plain" });
      res.end("hiii");
    } else if (req.url === "/data") {
      res.writeHead(200, { "Content-type": "text/plain" });
      const data = readFileSync(join(__dirname, "kasun.txt"));
      res.end(data);
    }
  });

  server.listen(port, () => {
    log(`Worker ${process.pid} started`);
    log(`server running... port: ${port}`);
  });
}
 */

// ------------------------------------Worker Threads

import { log } from "node:console";
import { createServer } from "node:http";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { Worker } from "node:worker_threads";

import process from "node:process";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const port = process.env.PORT || 4000;

const fileRead = new Promise((resolve, reject) => {
  const worker = new Worker(join(__dirname, "new-thread.js"));

  worker.on("message", (msg) => {
    resolve(msg);
  });
  worker.on("error", (err) => {
    reject(err);
  });
  worker.on("exit", (code) => {
    if (code !== 0) reject(new Error(`Worker stopped with exit code ${code}`));
  });
});

const server = createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-type": "text/plain" });
    res.end("hiii");
  } else if (req.url === "/data") {
    res.writeHead(200, { "Content-type": "text/plain" });
    fileRead.then((data) => res.end(data)).catch((err) => res.end(err));
  }
});

server.listen(port, () => {
  log(`Worker ${process.pid} started`);
  log(`server running... port: ${port}`);
});
