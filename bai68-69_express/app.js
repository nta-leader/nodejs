var express = require("express");
var app = express();
var port = 8080;

app.get("/",function(request, response){
    //response.send("<h1>chao cac ban</h1>");
    response.json({
        firstName: "Anh",
        lastName: "Nguyen"
    });
});

app.get("/user/:id", function(request, response){
    response.send(`<h1>User: ${ request.params.id }</h1>`)
});

app.listen(port, function(){
    console.log("Server is listening on PORT:", port);
});