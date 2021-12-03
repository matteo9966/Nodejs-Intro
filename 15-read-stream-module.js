const { Readable } = require("stream");


const inStream = new Readable();

inStream.push("ABCDEFGHIJKLM");
inStream.push("NOPQRSTUVWXYZ");
inStream.
inStream.push(null); // No more data

inStream.pipe(process.stdout);