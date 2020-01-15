var express = require("express");
var bordyParser = require("body-parser");
var _ = require("lodash");

var app = express();
var port = 8080;
var jsonParser = bordyParser.json();

app.use("/", function(request, response, next){
    console.log(request.url);
    next();
});

app.get("/", function(request, response){
    response.send(`
    <h1 style="color:red;">API RESTFUL JSON</h1>
    `);
});

var users = [
    {
        id: 1,
        username: "theanhit",
        firstName: "Anh",
        lastName: "Nguyen The"
    },{
        id: 2,
        username: "ntait",
        firstName: "Bay",
        lastName: "Nguyen Van"
    }
];

app.get("/api/user/:id", jsonParser, function(request, response){
    var obj = {
        id: Number(request.params.id)
    };
    var result = _.find(users, obj);
    response.json(result);
});

app.post("/api/user/:id", jsonParser, function(request, response){
    // create new and save to the database
});

app.put("/api/user/:id", jsonParser, function(request, response){
    // update user and save to the database
});

app.delete("/api/user/:id", jsonParser, function(request, response){
    // delete user from database
});

app.listen(port, function(){
    console.log("Server is listening on port:", port);
    console.log(`Server: http://localhost:${ port }`);
});