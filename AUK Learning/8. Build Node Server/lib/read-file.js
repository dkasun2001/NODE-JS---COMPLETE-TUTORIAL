import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { readFile } from "node:fs/promises";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const fileRead = async (path, res, contentType) => {
  try {
    const data = await readFile(join(__dirname,"../", path));

    //web mime types
    res.writeHead(200, `Content-Type:${contentType}`);
    res.end(data);
  } catch (error) {
    console.log(error);
    
    //web mime types
    res.writeHead(200, `Content-Type:${contentType}`);
    res.end("<h1>Server Error</h1>");
  }
};
