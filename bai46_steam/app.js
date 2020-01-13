var fs = require("fs");

var readable = fs.createReadStream(__dirname + "/readme.txt", {
    encoding: "utf8",
    highWaterMark: 32 * 1024 // 32kb
});

var writeable = fs.createWriteStream(__dirname + "/readme-copy.txt");

readable.on("data", function(chunk){
    console.log(chunk.length);
    writeable.write(chunk);
});