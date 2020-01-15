var bordyParser = require("body-parser");
var jsonParser = bordyParser.json();
var _ = require("lodash");

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

module.exports = function (app){
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
}