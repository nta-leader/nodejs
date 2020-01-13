var http = require("http");
var fs = require("fs");

http.createServer(function(request, response){
    response.writeHead(200, {"Content-Type": "text/html"});
    var html = fs.readFileSync(__dirname + "/index.html", "utf8");

    var user = "Theanh";

    html = html.replace("{user}", user);

    response.end(html);
}).listen(8080, "localhost");