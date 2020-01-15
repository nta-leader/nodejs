var express = require("express");

var app = express();
var port = 8080;

var apiController = require("./controllers/apiController");

apiController(app);

app.listen(port, function(){
    console.log("Server is listening on port:", port);
    console.log(`Server: http://localhost:${ port }`);
});