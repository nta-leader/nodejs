var express = require("express");
var bodyParser = require("body-parser");
var morgan = require("morgan");
var mongoose = require("mongoose");

var config = require("./config");
var setupController = require("./api/controllers/setupController");
var todoController = require("./api/controllers/todoController");

var app = express();
var port = process.env.PORT || 8080;

app.use("/assets", express.static(__dirname + "/public"));// doc toan bo file vs duong dan la /assets
app.use(bodyParser.json());// su dung khi clien gui yeu cau bang json
app.use(bodyParser.urlencoded({ extended: true }));  // su dung khi nguoi dung submit form

app.use(morgan("dev"));

app.set("view engine", "ejs");

// db info
console.log(config.getDbConnectionString());
console.log(config.getDbConnectionStringLocalhost());

setupController(app);
todoController(app);

mongoose.connect(config.getDbConnectionStringLocalhost(), {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    }
);

app.get("/", function(request, response){
    response.render("index");
});

app.listen(port, function(){
    console.log("Server is listening on port:", port);
});