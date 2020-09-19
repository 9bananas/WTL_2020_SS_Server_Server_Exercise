
function generate_list() {

    $.getJSON('http://localhost:1337/', function (data) {
        //console.log(data);
        let tbl = document.createElement("table");
        tbl.id = "names";
        let div = document.getElementById("names_list");
        //for (var i = 0; i < 9; i++) {
        for (var i = Object.keys(data).length - 1; i > Object.keys(data).length - 10; i--) {
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