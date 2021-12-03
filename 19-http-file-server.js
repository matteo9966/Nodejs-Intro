const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req,res)=>{
    
    //lets check the url that the user is asking us checking the url inside the req object
    const url = req.url;
    console.log('recieved url: ',url);
    if(url==='/'){
        //get a file from the default.html from the public folder
        fs.readFile('./public/default.html',(err,data)=>{
            // if(err){
            //     throw new Error(err.message);
            // }
            res.writeHead(200,{'Content-Type':'text/html'})
            res.end(data)
        })
    }else if(url.match(/.*(jpg|png)$/)){
        const imagepath = path.join(__dirname,'public','assets',req.url)
        console.log(imagepath);
        //per adesso restituisco solo imagepath poi vedo che succede
        const imageStream=fs.createReadStream(imagepath)
        res.writeHead(200,{'Content-Type':"image/jpeg"})
        imageStream.pipe(res);
    }
    else {
        res.writeHead(404, {"Content-Type": "text/plain"}); 
        res.end("404 Not Found"); 
    }


     

    res.writeHead(200,{'Content-Type':'text/plain'})
});

server.listen(3001)