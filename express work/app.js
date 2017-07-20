// var
var express = require("express");
var http = require("http");
 var app = express();

 app.use((request, response, next) => {
     console.log("Logging done")
     next()
 }); 


app.use((request, response, next) => {
    console.log("logging done")
    next()
});


app.use((request, response, next ) => {
    console.log("logging done")
    next()
});















// var express = require("express");

// var app = express();

// app.get("/",function(request, response) {
//     response.end("salam");
// });

// app.listen(30005, function() {
//     console.log("salam ya Nabi");
// });










// // new work of saturday




// var express = require('express') // Import express module from node_modules
// var http = require('http') // Import http module from node_modules
// var app = express() // call express function which means return req.handlerFunction

// app.use((request, response, next) => {
//     console.log("Logging done")
//     next()
// })
// app.use((request, response, next) => {
//     var minuts = (new Date()).getMinutes()
//     if ((minuts % 2) === 0) {
//         next()
//     } else {
//         response.send("User Not Authorized")
//     }
// })

// app.use((request, response) => {
//     response.send("Auth Success Send Informission")
// })






// http.createServer(app).listen(3006); 