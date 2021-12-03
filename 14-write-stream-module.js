const { WriteStream } = require('fs');
const {Writable}= require('stream');

const WritableStream = new Writable({write(chunk,encoding,callback){
    console.log(chunk.toString());
    callback();

}})

process.stdin.pipe(
    WritableStream.write(data,'utf-8',()=>{console.log("ho finito di scrivere!")})
)


// process.stdin.pipe(WritableStream);