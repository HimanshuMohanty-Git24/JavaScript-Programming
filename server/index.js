//making a api server

const http = require('http');
const fs = require('fs');
const { log } = require('console');
const url = require('url');

const myServer = http.createServer((req,res) => {
    const log =`${Date.now()}: ${req.url} New Req Received\n`;
    const myUrl = url.parse(req.url,true);
    console.log(myUrl);
    fs.appendFile('log.txt',log, (err) => {
        switch(myUrl.pathname){
            case '/':
                res.writeHead(200,{'Content-Type':'text/html'});
                res.end('<h1>Home Page</h1>');
                break;
            case '/about':
                res.writeHead(200,{'Content-Type':'text/html'});
                res.end('<h1>About Page</h1>');
                break;
            case '/data':
                res.writeHead(200,{'Content-Type':'application/json'});
                res.end(JSON.stringify({message:'Hello World'}));
                break;
            default:
                res.writeHead(404,{'Content-Type':'text/html'});
                res.end('<h1>Page Not Found</h1>');
        }
    });
});

myServer.listen(8000, () => {
    console.log('Server is running on port 8000');
});