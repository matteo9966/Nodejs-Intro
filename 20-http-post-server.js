const http = require('http')
const fs = require('fs')
const path = require('path')

//funzione che crea un read stram e fa il pipe al write stream ()=>{}

const server = http.createServer(
    (req,res)=>{
        const url =req.url
        if(req.method==="GET"){
        
            if(url==='/default.html'){
               fs.readFile('./public/default.html',(err,data)=>{
                res.writeHead(200,{'Content-Type':"text/html"}),   
                res.end(data);
               })
            }
            else if(url==='/'){
              fs.readFile('./public/form.html',(err,data)=>{
                res.writeHead(200,{'Content-Type':"text/html"}),   
                res.end(data);
              })
            }

            else if(url.match(/jpg$/)){
                //in this case the browser wants the image
                const imagepath= path.join(__dirname,'public','assets',url);
                if(fs.existsSync(imagepath)){
                    //se esiste il file mandalo
                    res.writeHead(200,{'Content-Type':'image/jpeg'})
                    fs.createReadStream(imagepath).pipe(res);
                }

            }

        }
        else if(req.method==="POST"){ 
            let body="body:"; 
            if(url==="/"){
                //in vanilla node you must listen to events on the req stream
                req.on('data',(chunk)=>{
                    
                    body+=chunk;
                })
                req.on('end',()=>{console.log(body);res.end("grazie")});
            }
            else{
                res.writeHead(404,{'Content-Type':"text/plain"})
                res.end("url sbagliato")
            }
        }
        else {

        }

    }
)

server.listen(5000)