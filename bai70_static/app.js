var express = require("express");
var cookieParser = require("cookie-parser");
var app = express();
var port = 8080;

app.use("/assets", express.static(__dirname + "/public"));// cho phe doc toan bo file trong thu muc public
app.use(cookieParser());

// custom middleware
app.use("/", function(request, response, next){
    console.log("Request URL: ", request.url);
    request.requestTime = new Date();
    next();
});

app.get("/:name.html", function(request, response){
    response.cookie("user", request.params.name);
    response.send(`
        <link href="assets/style.css" rel="stylesheet" type="text/css">
        <h1>hello <br> ${ request.requestTime }</h1>
    `);
});

app.get("/cookie", function(request, response){
    response.json(request.cookies);
});

app.listen(port, function(){
    console.log("Server is listening on port:",port);
});