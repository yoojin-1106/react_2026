const http = require('http');
console.log(http);

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "text/html");
    res.end("OK");
});

server.listen("3000", () => console.log("OK서버시작"));
// portNumber : 3000,  127.0.0.1 