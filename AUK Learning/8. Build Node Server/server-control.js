import { fileRead } from "./lib/read-file.js";
import { selectContentType } from "./lib/select-content-type.js";

export const server = (req, res) => {
  if (req.url === "/" && req.method === "GET") {
    fileRead("public/index.html", res, "text/html");
  } else if (req.method === "GET") {
    const extention = String(req.url).split(".");
    fileRead(
      `public${req.url}`,
      res,
      selectContentType(extention[extention.length - 1])
    );
    console.log("Kasun =>", selectContentType(extention[extention.length - 1]));
  }
};
