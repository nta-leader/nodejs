var express = require("express");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");

var app = express();
var port = 8080;

app.use("/assets", express.static(__dirname + "/public"));// cho phe doc toan bo file trong thu muc public
app.use(cookieParser());
app.set("view engine", "ejs");

var urlencodedParser = bodyParser.urlencoded({ extended: false })// dung khi submit form
// create application/json parser
var jsonParser = bodyParser.json() // su dung khi nguoi dung gui du lieu len bang json 

// custom middleware
app.use("/", function(request, response, next){
    console.log("Request URL: ", request.url);
    request.requestTime = new Date();
    next();
});

// routing
app.get("/:name.html", function(request, response){
    response.cookie("user", request.params.name);
    response.send(`
        <link href="assets/style.css" rel="stylesheet" type="text/css">
        <h1>hello <br> ${ request.requestTime }</h1>
    `);
});

app.get("/home", function(request, response){
    response.render(
        "index",
        {
            name: request.cookies.user
        }
    );
});

app.get("/cookie", function(request, response){
    response.json(request.cookies);
});

// http://localhost:8080/login?username=admin&password=12313
// su dung request.query
app.get("/login", function(request, response){
    response.render("index",{
        name: "login",
        username: request.query.username,
        password: request.query.password
    });
});

// su dung request.body
app.post("/login", urlencodedParser,function(request, response){
    response.render("index",{
        name: "login",
        username: request.body.username,
        password: request.body.password
    });
});

// lam viec voi json
app.get("/api/login", jsonParser, function(request, response){
    response.json(request.body);
    console.log(request.body);
});

app.listen(port, function(){
    console.log("Server is listening on port:",port);
});