var express = require('express') // Import express module from node_modules
var http = require('http') // Import http module from node_modules
var app = express() // call express function which means return req.handlerFunction

// {app.get('/', (request, response) => {
//     response.send("helle world")
// })
// app.get('/home', (request, response) => {
//     response.send("Render home page")
// })


// app.use(function (request, response, next) {
//     // response.writeHead(200, { "Content-Type": "text/plain" });
//     // response.end("Hello, World!");
//     console.log("run middleware")
//     next()
// })

// app.use(function (request, response,next) {
//     // response.writeHead(200, { "Content-Type": "text/plain" });
//     // response.end("Hello, World!");
//     console.log("run middleware2121121")
//     next()
// })

// app.get('/', (request, response) => {
//     response.send("helle world")
// })}








app.use((request, response, next) => {
    console.log("Logging done")
    next()
})
app.use((request, response, next) => {
    var minuts = (new Date()).getMinutes()
    if ((minuts % 2) === 0) {
        next()
    } else {
        response.send("User Not Authorized")
    }
})

app.use((request, response) => {
    response.send("Auth Success Send Informission")
})






http.createServer(app).listen(3000);


// var http = require("http");
// var express = require("express");
// var app = express();

// app.use((request, response, next) => {
//     console.log("logging done")
//     next()
// })
// app.use((request, response, next) => {
//     var minuts = (new Date()).getMinutes()
// })




// var http = require("http");
// var express = require("express");
// var app = express();
// app.use((request, response, next) => {
//     console.log("logging done")
//     next()
// })
// app.use((request, response, next) => {
//     var minuts = (new Date()).getMinutes()
//         if ((minuts % 2) === 0) {
//             next()
//         } else {
//             response.send("user not authorized")
//         }
// })

// var http = require("http");
// var express = require("express");
// var app = express();

// app.use((request, response, next) => {
//     console.log("Logging done");
//     next()
// })
// app.use((request, response, next) => {
//     var minuts = (new Date()).getMinutes()
//     if((minuts % 2) === 0) {
       
//         next()
//     } else(
//          response.send(" un authorized")
//     )
// })
// app.use((request, response) => {
//      response.send(" authorized")
// })
// http.createServer(app).listen(3003);






// app.use((request, response, next) => {
//     console.log("loggin done")
//     next()
// })
// app.use((request, response, next) => {
//     var minuts = (new Date()).getMinutes()
//     if((minuts % 2) === 0) {
//         next()
//     } else {
//         response.send("user is Not authorized")
//     }
// })















var http = require("http")
var express = require("express")
var app = express()

app.use((request, response, next) => {
    console.log("Logging done")
    next()
})
app.use((request, response, next) => {
    var minuts = (new Date()).getMinutes()
    if((minuts % 2) === 0) {
        next()
    } else {
        response.send("not authorized")
    }
})
app.use((request, response) => {
    response.send("authorized")
})

http.createServer(app).listen(3001)



// var http = require("http")
// var express = require("express")
// var app = express()

// app.use((request, response, next) => {
//     console.log("Logging done")
//     next()
// })
// app.use((request, response, next) => {
//     var minuts = (new Date()).getMinutes()
//     if((minuts % 2) === 0) {
//         next()
//     } else {
//         response.send("Authorized Site")
//     }
// })
// var http = require("http");
// var express = require("express");
// var app = express();

// app.use((request, response, next) => {
//     console.log("Logging done");
//     next()

// })
// app.use((request, response, next) => {
//     var minuts = (new Date()).getMinutes();
//     if ((minuts % 2) === 0) {
//         next()

//     } else{
//         response.send("Not Authorized ")
//     }

// })
// app.use((request, response) => {
//     response.send("Authorized ")
// })
// http.createServer(app).listen(3002)
















// app.use((request, response, next) => {
//     console.log("Logging done")
//     next()
// })
// app.use((request, response, next) => {
//     var minuts = (new Date()).getMinutes()
//     if((minuts % 2) === 0) {
//         next()
//     } else {
//         response.send("not Authorized")
//     }
// })












// var minuts = (new Date()).getMinutes()
//     if((minuts % 2) === 0) 
//     var minuts = (new Date()).getMinutes()
//     if ((minuts % 2) === 0)
//     var minuts = (new Date()).getMinutes
//     if((minuts % 2) === 0)


//     var http = require("http")
//     var express = require("express")
//     var app = express()
//     var minuts = (new Date()).getMinutes()
//     if((minuts % 2) === 0)









// var minuts = (new Date()).getMinutes()



var http = require("http");
var express = require("express");
var app = express();

app.use((request, response, next) => {
    console.log("Logging done");
    next();
})
app.use((request, response, next) => {
    var minuts = (new Date()).getMinutes();
    if((minuts % 2) === 0) {
        next();
    } else {
        response.send("Not Authorized");
    }
    
})
app.use((request, response) => {
        response.send("Authorized Person")
    })
    http.createServer(app).listen(3004);