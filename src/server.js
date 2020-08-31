const myData = require('./myData.js');
const Polygon = require('./Polygon.js');
const http = require('http');

console.log("Hello, World!");

myData.getMessage();


const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (request, response) => {
    if(request.url === '/favicon.ico') {
        console.log('favicon request');
    }
    
    response.writeHead(200, {'Content-Type': 'text/plain'});
    console.log('request received');
    
    response.write(myData.getMessage());
    response.end();
};

http.createServer(onRequest).listen(port);