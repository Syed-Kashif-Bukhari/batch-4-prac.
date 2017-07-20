// var http = require("http");
// http.createServer(function(request,response) {

// });











// var http = require("http");

// http.createServer(function(request,response) {

// })



// var http = require("http");
//     http.createServer(function(request,response) {

//     })



// var http = require("http");
//     http.createServer(function(request,response) {
//         response.writeHead(200,{"Content-Type":"text/plain"});
//     })    
//     var http = require("http");
//     http.createServer(function(request,response) {
//         response.writeHead(200,{"content-type":"text/plain"});
//     })


//     var http = require("http");
//     http.createServer(function(request,response) {
//         response.writeHead(200,{"content-type":"text/plain"});
//         response.end("hellow\n");
//     }).listen(8081);



//     var http = require("http");

// http.createServer(function(request,response) {
//     response.writeHead(200,{"Content-Type":"text\plain"});
//     response.end("hellow World/n");
// }).listen(8081);

var http = require("http");
http.createServer(function(request,response) {
    response.writeHead(200,{"Content-Type":"text/plain"});
     res.write("The date and time is currently: " + dt.myDateTime());
    response.end();
}).listen(8081);
console.log('Server running at http://127.0.0.1:8081/');

// var http = require('http');
// var dt = require('./myfirstmodule');

// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write("The date and time is currently: " + dt.myDateTime());
//     res.end();
// }).listen(8080);
// console.log("setsadjkahsjd");