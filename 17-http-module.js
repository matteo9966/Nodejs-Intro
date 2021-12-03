const fs = require('fs');
const https= require('https');

const url = new URL('https://en.wikipedia.org/wiki/Genghis_Khan')

var options = { hostname: 'en.wikipedia.org', port: 443, path: '/wiki/Sachin_Tendulkar', method: 'GET' }

const options2 = {hostname:url};

const request = https.request(options,(res)=>{
    let responseBody=""
    console.log("LA RICHIESTA è  INIZIATA!");
    console.log(`Server Status: ${res.statusCode} `); 
    res.setEncoding("UTF-8"); //imposta l'encoding per questo stream
    res.on('data',(chunk)=>{console.log(`--data length-- ${chunk.length}`);
    responseBody+=chunk;
    res.on('end',()=>{fs.writeFile('./paginawikipedia.html',responseBody,(err)=>{console.log(err)})})
})
    res.on('end',()=>{console.log("la pagina è stata ricevuta!");});
})

request.end()