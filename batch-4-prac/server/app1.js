var http = require("http");

function requestHandler(request,response) {
	console.log("in come a request to: " + request.url);
	if (request.url == "/") {
		response.end("hellow world");

	}else if (request.url === "/home"){
		response.end("Hello, this is Home Page");

	}else if (request.url === "/about"){
		response.end("Hello, this is abour page");

	}else {
		response.end("<h1> 404 not found</h1>");
	}
}
var server = http.createServer(requestHandler);
server.listen(3000, function(){
console.log("server in on");
}
);



var http = require("http");

function requestHandler (request, response) {
	console.log("it come from" + request.url);

	if(request.url == "/") {
		response.end("hellow world");

	}else if (request.url === "/about") {
		response.end("hellow it is about Page");

	}else if (request.url === "/home") {
		response.end("hellow it is home page");

	}else {
		response.end("404 page not found");
	}
}

var server = http.createServer(requestHandler);

server.listen(3001,function(){
	console.log("Sallal la ho ala Muhammad Sallal la ho alaihi wasallam ")
});


var http = require("http");


function salman (request,response) {
	console.log("it come from" +request.url )
	if (request.url === "/" ) {
		response.end("Ya Rasool Allah Tairai dar Ki Fizaoo ko salam");

	}else if (request.url === "/home") {
		response.end("ya Rasool Allah Tairai dar Ki Fizaoo ko salam gumbad e ghizrah ki ")
	}else if(request.url === "/about") {
		response.end("ya Rasool Allah Tairai dar Ki Fizaoo ko salam gumbad e ghizrah ki thandi chaoo ko salam ");

	}else {
		response.end("404 error on this page");
	}
}
var server = http.createServer(salman);
server.listen(3002, function(){
	console.log("ya Nabi Salam Alaika");
}) ;




var http = require("http");

function yaAllah (request,response) {
	console.log("it come from to it " + request.url);
	if(request.url === "/") {
		response.end("hello world ");
	} else if(request.url === "/home") {
		response.end("hello , it home ");
	} else if(request.url === "/about") {
		response.end("hello , it is about"); 
	} else {
		response.end("404 error not found");
	}
}
var server = http.createServer(yaAllah);

server.listen(3003, function(){
	console.log("ya Allah ya Rasool Allah");
});