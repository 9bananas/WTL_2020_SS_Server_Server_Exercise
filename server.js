'use strict';

//loading of requirements
var http = require('http');
var port = process.env.PORT || 1337;
var url = require('url');
var fs = require('fs');
var list_generator = require('./list_generator');
var script = require('./script1.js');
//var config = require('./config.js').global_port;
//console.log(global_port);

//configuration variables
var list_file_path = './data_lists/';
var data_lists = ['user_list', 'admin_list'];

//checks for all files defined in 'data_lists', generates any files not found as empty files
try {
    list_generator.check_lists(list_file_path, data_lists);
}
catch (err) {
    console.log('Error in list generator call!');
    console.error(err);
}

//debugging messge
console.log('trying to initiate server ...');

//initializes the server
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

/* ----- !!! NEEDS DOCUMENTATION !!! ----- */
const express = require('express')
const app = express()

app.post('/submit', function (req, res) {
    res.send('[{"datum": "2020-04-23T18:25:43.511Z","id": 1,"name": "' + req + '"}]');
    console.log(req);
});



//JSON into array
//var file_path = './data_lists/user_list.json';
var file_path = './names.json';

//function read_list() {
//    try {
//        last_list = JSON.parse(fs.readFileSync(file_path, 'utf8'));
//        //console.log(last_list.name);
//        return last_list;
//    }
//    catch (err) {
//        console.log(err);
//        console.log('Error in script1: file not found!')
//    }
//}

////number of outputs
//var number_of_output = 10;
////exact type of output (name, id, datum)
//var type_of_output = 'id';

//function last_x_users(number_of_output, type_of_output) {
//    var last_list = read_list();
//    for (var i = 0; i < number_of_output - 1; i++) {
//        console.log(last_list[i].id);
//    }
//}

//last_x_users(number_of_output, type_of_output);




//neuer Record in names.js
function submitbackend(name) {
    var today = new Date();
    var datum = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate() + " T" + today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + "." + today.getMilliseconds();
    var data = JSON.parse(fs.readFileSync('names.json', 'utf8'));
    var id = Object.keys(data).length + 1;
    var bool = false;
    data.push({ datum: datum, id: id, name: name, });
    var json = JSON.stringify(data);
    fs.writeFileSync('names.json', json);
    //return (data[Object.keys(data).length]);
}

submitbackend("Mario");
console.log(JSON.parse(fs.readFileSync('names.json', 'utf8')));