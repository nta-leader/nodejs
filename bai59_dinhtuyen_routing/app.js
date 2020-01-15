var http = require("http");
var fs = require("fs");

http.createServer(function(request, response){
    if(request.url === "/" || request.url === "/index.html"){
        fs.createReadStream(__dirname + "/index.html", "utf8").pipe(response);
    }else if(request.url === "/api"){
        response.writeHead(200, {"Content-Type":"application/json"});
        var obj = {
            firstName: "Anh",
            lastName: "Nguyen"
        };
        response.end(JSON.stringify(obj));
    }else{
        response.end("404");
    }
}).listen(8080, "localhost", function(){
    console.log("Server listening on: http://localhost:8080");
});