'use strict';
var http = require('http');
var port = process.env.PORT || 1337;
var url = require('url');
var fs = require('fs');
var list_generator = require('./list_generator');

//checks for files defined in data_lists, generates all of the lists if not found
var list_file_path = './data_lists/';
var data_lists = ['user_list','admin_list'];

try {
    list_generator.check_lists(list_file_path, data_lists);
}
catch (err) {
    console.log('Error in list_generator call!');
    console.error(err);
}

//initializes the web server
console.log('trying to initiate server ...');
try {
    http.createServer(function (req, res) {
        fs.readFile('test_file.html', function (err, data) {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        });
    }).listen(1337);
    console.log('... initialization finished!');
}
catch (err) {
    console.log('... initialization error!');
    console.error(err);
}