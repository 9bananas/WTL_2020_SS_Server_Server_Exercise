var serverurl = "http://localhost:1337/";

// this function generates a table of the last ten or, if less, all, names.
// we do this in the frontend, so that we would be able to create a dropdown or input field, where the users could choose how many they would like to see, without having to contact the server for each change

function generate_list() {
    // get request to server
    $.getJSON(serverurl + "getnames", function (data) {
        let tbl = document.createElement("table");
        tbl.id = "names";
        let div = document.getElementById("names_list");
        // get the last 10 names in reverse order
        if (Object.keys(data).length >= 10) {
            for (var i = Object.keys(data).length - 1; i >= Object.keys(data).length - 10; i--) {
                let row = document.createElement("tr");
                row.appendChild(document.createElement("td")).appendChild(document.createTextNode(data[i].id));
                row.appendChild(document.createElement("td")).appendChild(document.createTextNode(data[i].name));
                var datetime = document.createElement("td");
                row.appendChild(datetime).appendChild(document.createTextNode(data[i].datum));
                datetime.className = "date";
                tbl.appendChild(row);
                div.appendChild(tbl);
            }
        // if there are less than 10 names in the list, then all will be shown in reverse order
        } else {
            for (var i = Object.keys(data).length - 1; i >= 0; i--) {
                let row = document.createElement("tr");
                row.appendChild(document.createElement("td")).appendChild(document.createTextNode(data[i].id));
                row.appendChild(document.createElement("td")).appendChild(document.createTextNode(data[i].name));
                var datetime = document.createElement("td");
                row.appendChild(datetime).appendChild(document.createTextNode(data[i].datum));
                datetime.className = "date";
                tbl.appendChild(row);
                div.appendChild(tbl);
            }
        }
    });
}


// function to send the data of the input field to the server, and afterwards show the id which is given from the server & the name in a pop-up window.
function submit() {
    let name = document.getElementById("name_input").value;
    console.log(name);
    $.post(serverurl + 'submit', {name:name}, function (data) {
        let tbl = document.getElementById("names");
        tbl.parentNode.removeChild(tbl);
        generate_list();
        alert("Hallo " + data.name + "! Du bist Besucher Nummer: " + data.id);
    });
}