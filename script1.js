async function generate_list() {

    $.getJSON('http://localhost:1337/', function (data) {
        console.log(data);
        let tbl = document.createElement("table");
        tbl.id = "names";
        let div = document.getElementById("names_list");
        data.forEach(d => {
            let row = document.createElement("tr");
            row.appendChild(document.createElement("td")).appendChild(document.createTextNode(d.id));
            row.appendChild(document.createElement("td")).appendChild(document.createTextNode(d.name));
            row.appendChild(document.createElement("td")).appendChild(document.createTextNode(d.datum));
            tbl.appendChild(row);
            div.appendChild(tbl);
        });
    });
}


async function submit() { //hier muss der eingetragene Name übergeben werden
    $.getJSON('http://localhost:1337/submit', function (data) {
        let tbl = document.getElementById("names");
        tbl.parentNode.removeChild(tbl);
        alert("You have been added: " + data.name + ", your ID is: " + data.id);
        generate_list() 
    });
}

