const http = require('http');

//this is for split query
const url = require('url');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req,res) => {
    console.log(req.url)
    const q = url.parse(req.url, true).query;
    // console.log(q);

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    // res.write(req.url);
    res.end(`Hello World ${q.name} + ${q.age}`);
})

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
}
)