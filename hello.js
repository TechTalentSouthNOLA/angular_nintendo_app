var http = require('http'),
    fs = require('fs');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(fs.readFileSync('hello.html'));
    console.log('sent a response!');
}).listen(8000, "127.0.0.1");

console.log('Server running at http://127.0.0.1:8000/');