import "dotenv/config";
import { log } from "node:console";
import path from "node:path";
import { createTransport } from "nodemailer";
import {fileURLToPath} from "node:url"
import {join, dirname} from "node:path"


const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const mailServer = createTransport({
  service: "gmail",
  auth: {
    user: process.env.FROM_EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

log("email send start");

mailServer.sendMail(
  {
    from: process.env.FROM_EMAIL,
    to: process.env.TO_EMAIL,
    subject: "New test Email",
    // text: "Puka Sududa",
    html: `
    <html> 
    <head>
    <style>
    .text{
    color:red;
    }
    </style>
    </head>
    <body>
    <h1 classname="text">Kasun</h1>
    </body>
    </html>
    `,
    attachments: {
      filename: "index.js",
      path: join(__dirname, "index.js"),
    },
  },
  (err, infor) => {
    if (err) {
      log("can not send the Email");
    } else {
      log("Email sent");
    }
  }
);

/* //outlook mail
const mailServer = createTransport({
  host: "smtp.office365.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.FROM_EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

mailServer.sendMail(
  {
    from: process.env.FROM_EMAIL,
    to: process.env.TO_EMAIL,
    subject: "New test Email",
    text: "Puka Sududa",
  },
  (err, infor) => {
    if (err) {
      log("can not send the Email");
      log(err);
    } else {
      log("Email sent");
    }
  }
); */

log("email send end");
