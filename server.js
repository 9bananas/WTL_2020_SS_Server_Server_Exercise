'use strict';
var http = require('http');
var port = process.env.PORT || 1337;
var url = require('url');
var fs = require('fs');

http.createServer(function (req, res) {
    fs.readFile('test_file.html', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
}).listen(1337);