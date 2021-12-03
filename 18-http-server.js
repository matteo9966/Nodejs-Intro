const http = require('http');
const server = http.createServer((request,response)=>{
 response.writeHead(200,{"Content-Type":"text/plain"});
 response.end(`CIAO, \n queste sono alcune informazioni \n ${request.url} \n \n ${request.headers}`);
})
server.listen(3000); 
console.log('listening on port 3000!')