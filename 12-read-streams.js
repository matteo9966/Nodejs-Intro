const fs = require('fs');
const readStream = fs.createReadStream("./readFile.txt","UTF-8"); 

readStream.once('data',(data)=>{console.log(data)})
readStream.on("end", () => { 
    console.log(`reading completed`); 
    }); 