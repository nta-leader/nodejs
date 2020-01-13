var Dialog = require("./Dialog");
var dialog = new Dialog();

dialog.on("hello", function(data){
    console.log("Co 1 loi chao moi !", data);
});

dialog.sayHello("Mai Hoa");