import { log } from "node:console";
import { EventEmitter } from "node:events";

class DKEmitter extends EventEmitter {
  constructor(city, age) {
    super();
    this.city = city;
    this.age = age;
  }

  runOnClick() {
    this.emit("kasun", "Dinusha", this.city);
  }
}

const emitterObj = new DKEmitter("Kandyyy", 23);

const myFuntion = async (name) => {
  log("kasun2 event", name);
};

emitterObj.on("kasun", () => {
  log("kasun event");
});

emitterObj.addListener("kasun2", myFuntion);

//----Run event one time use "once"-----
/* emitterObj.once("kasun", () => {
  log("kasun event");
});
 */
emitterObj.on("kasun", (name, city) => {
  log(`My name is ${name} and lives in ${city}`);
});

emitterObj.emit("kasun2", "Dinusha");
emitterObj.emit("kasun2", "Dinusha");

emitterObj.removeListener("kasun2", myFuntion);

emitterObj.emit("kasun2", "Dinusha");
emitterObj.emit("kasun2", "Dinusha");

emitterObj.runOnClick();
