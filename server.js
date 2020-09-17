'use strict';
var http = require('http');
var port = process.env.PORT || 1337;
var url = require('url');
var fs = require('fs');
var list_generator = require('./list_generator');
var script = require('./script1.js');


//checks for a file called "user_list.json", generate if not found
var list_file_path = './data_lists/';
var data_lists = ['user_list','admin_list'];

try {
    list_generator.check_lists(list_file_path, data_lists);
}
catch (err) {
    console.log('Error in list generator call!');
    console.error(err);
}

console.log('trying to initiate server ...');

try {
    http.createServer(function (req, res) {
        fs.readFile('names.json', function (err, data) {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Request-Method', '*');
            res.setHeader('Access-Control-Allow-Methods', '*');
            res.setHeader('Access-Control-Allow-Headers', 'authorization, content-type');
            res.writeHead(200, { 'Content-Type': 'json' });
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

const express = require('express')
const app = express()

app.post('/submit', function (req, res) {
    res.send('[{"datum": "2020-04-23T18:25:43.511Z","id": 1,"name": "' + req + '"}]');
});