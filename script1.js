// JavaScript source code
function generate_list() {
    //var file = "names.json";
    //var rawFile = new XMLHttpRequest();
    //rawFile.overrideMimeType("application/json");
    //rawFile.open("GET", file, true);
    //rawFile.onreadystatechange = function () {
    //    if (rawFile.readyState === 4 && rawFile.status == "200") {
    //        callback(rawFile.responseText);
    //        console.log(rawFile.responseText)
    //    }
    //}
    //rawFile.send(null);

    //jQuery.getJSON("names.json", function (data) {
    //    console.log(data);
    //});

//    var json = (funcion(){
//        var json = null;
//    $.ajax({
//        'async': false,
//        'global': false,
//        'url': "names.json",
//        'dataType': "json",
//        'success': function (data) {
//            json = data;
//        }
//    });
//    console.
    //log(json);
//}) ();

    //var json = require('./names.json');
    //console.log(json);



    //$.ajax({
    //    url: "ma,es.html",
    //    context: document.body
    //}).done(function () {
    //    console.log("lala");
    //});

    //$.ajaxSetup({
    //    crossOrigin: true
    //});
    //$.getJSON("./names.json", function (json) {
    //    dataType: json;
    //    console.log(json); // this will show the info it in firebug console
    //});

    fetch('./names.json')
        .then(results => results.json())
        .then(console.log);

}

