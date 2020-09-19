
function generate_list() {

    $.getJSON('http://localhost:1337/', function (data) {
        //console.log(data);
        let tbl = document.createElement("table");
        tbl.id = "names";
        let div = document.getElementById("names_list");
        data.forEach(d => {
            let row = document.createElement("tr");
            row.appendChild(document.createElement("td")).appendChild(document.createTextNode(d.id));
            row.appendChild(document.createElement("td")).appendChild(document.createTextNode(d.name));
            var date = d.datum;
            var parts = date.slice(0, -5).split('T');
            var dateC = parts[0];
            var timeC = parts[1];
            row.appendChild(document.createElement("td")).appendChild(document.createTextNode(dateC + ' ' + timeC));
            tbl.appendChild(row);
            div.appendChild(tbl);
        });
    });
}

function submit() {
    let name = document.getElementById("name_input").value;
    $.post('http://localhost:1337/submit', name, function (data) {
        let tbl = document.getElementById("names");
        tbl.parentNode.removeChild(tbl);
        alert("You have been added: " + data.name + ", your ID is: " + data.id);
        generate_list();
        console.log(data);
    });
}



/*
//JSON into array
var fs = require('fs');
//var file_path = './data_lists/user_list.json';
var file_path = './names.json';

function read_list() {
    try {
        last_list = JSON.parse(fs.readFileSync(file_path, 'utf8'));
        //console.log(last_list.name);
        return last_list;
    }
    catch (err) {
        console.log(err);
        console.log('Error in script1: file not found!')
    }
}

//number of outputs
var number_of_output = 10;
//exact type of output (name, id, datum)
var type_of_output = 'id';

function last_x_users(number_of_output, type_of_output) {
    var last_list = read_list();
    console.log(last_list.name);
    for (var i = 0; i < number_of_output; i++) {
        //console.log(last_list);
        
    }
}

last_x_users(number_of_output, type_of_output);
*/