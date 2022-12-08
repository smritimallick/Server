const http = require("http"); // importing  pa ckage

const port = 8081;

http.createServer((request, response) => {
    // callback function
    response.writeHead(200, {"Content-Type" : "text/html"});
    response.write("<h2> Meow, welcome to our server  ^_^ </h2>");
    response.end();
}).listen( port, () => {
    // callback function
    console.log(`Nodejs Server started on ${port}`);
});

// open on http://localhost:8081 : requesting for server