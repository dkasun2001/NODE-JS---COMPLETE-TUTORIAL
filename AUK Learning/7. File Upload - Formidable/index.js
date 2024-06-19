import { log } from "node:console";
import { createServer } from "node:http";
import { IncomingForm } from "formidable";
import { getDataHtml, postDataHtml } from "./userDataHandle.js";
import { copyFile, rm, existsSync, mkdir } from "node:fs";

createServer((req, res) => {
  if (req.method === "POST") {
    const userData = new IncomingForm();
    userData.parse(req, (err, fields, files) => {
      if (err) {
        console.log(err);
        res.end(postDataHtml("error"));
      } else {
        console.log("User Data Fields", fields);
        console.log("User file Fields", files.userfiles[0].originalFilename);
        console.log(" ");

        const fileSrcPath = files.userfiles[0].filepath;
        const fileDestPath = `7. File Upload - Formidable/upload/${files.userfiles[0].originalFilename}`;

        if (existsSync("7. File Upload - Formidable/upload")) {
          console.log("folder found");
        } else {
          console.log("folder not found");
          mkdir("7. File Upload - Formidable/upload/", (err) => {
            if (err) {
              console.log("can not make folder");
            } else {
              console.log("folder created");
            }
          });
        }

        copyFile(fileSrcPath, fileDestPath, (err) => {
          if (err) {
            console.log(err);
          }
        });

        rm(fileSrcPath, (err) => {
          if (err) {
            console.log(err);
          } else {
            console.log("file deleted");
          }
        });

        res.end(postDataHtml("ok"));
      }
    });
  } else if (req.method === "GET") {
    res.end(getDataHtml);
  }
}).listen(4000, () => log("server running"));
