const fs = require('fs');
const writeStream = fs.createWriteStream('./output','utf-8');

process.stdin.on('data',(data)=>writeStream.write(data))