'use strict';
var http = require('http');
var port = process.env.PORT || 1337;
var url = require('url');
var fs = require('fs');


//checks for a file called "user_list.json", set a boolean according to wether it found it or not
var user_list_file_path = './user_list.json';
var user_list_existence_check = new Boolean(false);

try {
    user_list_existence_check = false;
    if (fs.existsSync(user_list_file_path = true)) {
        user_list_existence_check = true;
        console.log('user_list.json ... found!');
    }
    if (fs.existsSync(user_list_file_path = false)) {
        user_list_existence_check = false;
        user_list_generator();
        console.log('user_list.json missing ... generating');
    }
    
}
catch (err) {
    console.error(err);
    
}

//generates a file called user_list.json: this guarantees, that the server always has the right file ready
function user_list_generator(user_list_existence_check) {
    if (user_list_existence_check = false) {
        fs.open('user_list.json', 'w', function (err, file) {
            if (err) throw err;
            console.log('user_list successfully created!');
        })
    }
    else {
        console.log("no user_list generated ... error?")
    }
};

http.createServer(function (req, res) {
    fs.readFile('test_file.html', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });
}).listen(1337);