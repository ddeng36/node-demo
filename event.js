const EventEmitter = require("events");
const eventEmitter = new EventEmitter();

eventEmitter.on("start", () => {
  console.log("started");
});
eventEmitter.emit("start");

eventEmitter.once("once", () => {
  console.log("once");
});
eventEmitter.emit("once");
eventEmitter.emit("once");

