/* import { createConnection } from "mysql2";
import { log } from "node:console";

const db = createConnection({
  host: "localhost",
  port: "3306",
  user: "root",
  password: "",
  database: "school",
});

db.connect((err) => {
  if (err) {
    log(err);
  } else {
    log("database connected");

    const sqlQuery = "UPDATE `office_details` SET name='Upul' WHERE id = 2";
    // "DELETE FROM `office_details` WHERE id = 1";
    //   "SELECT l_name FROM `student_detailes` WHERE age > 10 ORDER BY f_name";
    //   "INSERT INTO `office_details` (name,phone) VALUES ('Dinusha','0757645693')";
    //   "CREATE TABLE `office_details` (id int AUTO_INCREMENT, name varchar(50), phone varchar(15), PRIMARY KEY (id))";

    db.query(sqlQuery, (err, result) => {
      if (err) {
        log(err);
      } else {
        log(result);
      }
    });
  }
});
 */

//use promise API

import { createConnection } from "mysql2/promise";
import { log } from "node:console";

(async () => {
  try {
    const db = await createConnection({
      host: "localhost",
      port: "3306",
      user: "root",
      password: "",
      database: "school",
    });

    const [result] = await db.query("SELECT * FROM `student_detailes`");
    log(result);
  } catch (error) {
    log(error);
  }
})();
