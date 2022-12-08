const http = require("http");

const port = 8081;

http.createServer((request, response) => {
    response.writeHead(200, {"Content-Type" : "text/html"});
    response.write("<h2> Hello, this is our server ^_^ </h2>");
    response.end();
}).listen( port, () => {
    console.log(`Nodejs Server started on ${port}`);
});