const http = require('http');
const fs = require('fs').promises;
const url = require('url');

http
    .createServer(async (req, res) => {
        var pathname = url.parse(req.url).pathname;
        console.log('req.method : ', req.method);
        console.log("pathname : ", pathname);
        if(req.method === 'GET'){
            if(pathname === '/'){
                const data = await fs.readFile('./index.html');
                res.end(data);
            }else if(pathname === '/person'){
                res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
                res.end(JSON.stringify({name:"김미미", age:30 , email:'abs@gmail.com'}));
            }else if(pathname === '/team'){
                res.writeHead(200, {'Content-Type': 'application/json; charset=utf-8'});
                res.end(JSON.stringify({name:"손흥민", age:30 , email:'abs@gmail.com', team:'미쿡'}));
            }
        }else if(req.method === 'POST'){
            res.end(req.method);
        }
    })
    .listen(3000, function(){
        console.log()
    });