//fs
var fs = require("fs");

var content = fs.readFileSync(__dirname + "/readme.txt", "utf8"); //dung khi doc file config 
console.log(content);

fs.readFile(__dirname + "/readme.txt", "utf8", function (err, data){
    if(err) throw err; 
    console.log(data + "2");
});