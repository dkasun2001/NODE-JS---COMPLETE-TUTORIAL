import inquirer from "inquirer";
import { log } from "node:console";
import { cardGen } from "./htmlCardGen.js";
import fileWrite from "../4. FS Module Practical/libs/writefile.js";

const studentInfo = [];
(async () => {
  let allCard = "";

  do {
    const data = await inquirer.prompt([
      {
        type: "input",
        message: "Enter Student name : ",
        name: "name",
      },
      {
        type: "number",
        message: "Enter Student age : ",
        name: "age",
      },
      {
        type: "input",
        message: "Enter Student city : ",
        name: "city",
      },
      {
        type: "list",
        message: "Enter Student Class : ",
        choices: ["class 1", "class 2", "class 3", "class 4", "class 5"],
        name: "stuClass",
      },
      {
        type: "checkbox",
        message: "Enter Student Subjects : ",
        choices: ["Java", "Javascript", "Python", "Go lang", "Dart"],
        name: "subject",
      },
      {
        type: "confirm",
        message: "Have more students ?  ",
        name: "check",
      },
    ]);

    // log(data);
    const { check, ...info } = data;
    studentInfo.push(info);

    if (!check) {
      break;
    }
  } while (true);

  studentInfo.forEach(({ name, age, stuClass, subject }) => {
    allCard += cardGen(name, age, stuClass, subject);
  });

  log(allCard);

  const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Info</title>
<link rel="stylesheet" href="index.css"></head>
<body>
    <main class="main">
       ${allCard}
    </main>
</body>
</html>`;
  fileWrite("../5. Inquirer Library, File Gen/index.html", htmlContent, (d) =>
    log(d)
  );
})();
// myFuntion();
