'use strict';

//loading of requirements
var fs = require('fs');
var list_generator = require('./list_generator');
const express = require('express');
var bodyParser = require('body-parser');

//configuration variables
var list_file_path = './';
var data_lists = ['names'];

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



// create new express app and save it as "app"
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

// server configuration
const PORT = process.env.PORT || 1337;

// create a route for the app
app.get('/', (req, res) => {
        res.send('Ich bin der nette Server :)');
});

// create route for submitting the name 
app.post('/submit', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Request-Method', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Access-Control-Allow-Headers', 'authorization, content-type');
    res.send(newName(req.body['name']));
});
    // make the server listen to requests
    app.listen(1337, () => {
        console.log('Server running at: http://localhost:1337/');
    });


// create route for getting the namelist
app.get('/getnames', (req, res) => {
    try {
        var data = JSON.parse(fs.readFileSync('names.json', 'utf8'));
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Request-Method', '*');
        res.setHeader('Access-Control-Allow-Methods', '*');
        res.setHeader('Access-Control-Allow-Headers', 'authorization, content-type');
        res.send(data);
    } catch {
        res.send("[{}]");
    }
});


//neuer Record in names.js
function newName(name) {
    var datum = new Date().toLocaleString();
    var data = JSON.parse(fs.readFileSync('names.json', 'utf8'));
    var id = data[Object.keys(data).length - 1].id + 1;
    data.push({ datum: datum, id: id, name: name, });
    var json = JSON.stringify(data);
    fs.writeFileSync('names.json', json);
    return ({ datum: datum, id: id, name: name, });
}