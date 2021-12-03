const Stream = require('stream');

const Readable = new Stream.Readable();
Readable._read=()=>{};



const Writable= new Stream.Writable();

Writable._write=(chunk,encoding,next)=>{
    console.log(chunk.toString());
    next();
}

Readable.pipe(Writable);


Readable.push("aloaaaaa!!!")