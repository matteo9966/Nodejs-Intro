const events = require("events");

const emitter = new events.EventEmitter();

emitter.on("inputData", (data) => {
  if (data === "exit") {
    process.exit(0);
  } else {
    console.log("data:", data);
  }
});

process.stdin.on("data", (data) => {
  emitter.emit("inputData", data.toString("utf-8").trim());
});
