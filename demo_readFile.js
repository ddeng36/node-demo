const http = require('http');
const fs = require('fs');

http.createServer((req,res)=>{
    const data = fs.readFileSync('demo.html');
    res.writeHead(200,{'Content-Type' : 'tesxt/html'});
    res.write(data);
    res.end();
}).listen(8080);