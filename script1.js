var serverurl = "http://localhost:1337/";
function generate_list() {

    $.getJSON(serverurl + "getnames", function (data) {
        let tbl = document.createElement("table");
        tbl.id = "names";
        let div = document.getElementById("names_list");
        for (var i = Object.keys(data).length - 1; i >= Object.keys(data).length - 10; i--) {
            let row = document.createElement("tr");
            row.appendChild(document.createElement("td")).appendChild(document.createTextNode(data[i].id));
            row.appendChild(document.createElement("td")).appendChild(document.createTextNode(data[i].name));
            var date = data[i].datum;
            var parts = date.slice(0, -5).split('T');
            var dateC = parts[0];
            var timeC = parts[1];
            row.appendChild(document.createElement("td")).appendChild(document.createTextNode(dateC + ' ' + timeC));
            tbl.appendChild(row);
            div.appendChild(tbl);
        }
    });
}



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