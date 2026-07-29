const http = require('http');
const fs = require('fs');

const server = http.createServer(function(_, res){
    fs.readFile('./index.html', function(_, data){
        res.end(data);
    })
});

server.listen(3000, function(){
    console.log('listen server 3000');
});