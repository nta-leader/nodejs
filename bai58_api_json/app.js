var http = require("http");

http.createServer(function(request,response){
    response.writeHead(200, {"Content-Type": "application/json"});

    var obj = {
        firstName: "Anh",
        lastName: "Nguyen"
    };

    response.end(JSON.stringify(obj));
}).listen(8080, "localhost");