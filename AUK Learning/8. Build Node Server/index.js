import { createServer } from "node:http";
import { server } from "./server-control.js";

  const PORT = process.env.PORT || 3000;

createServer((req, res) => {
  server(req, res);
}).listen(PORT, () =>console.log(`Server running ${PORT}`));
