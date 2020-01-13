var EventEmitter = require("events");
var util = require("util");

// ham khoi tao doi tuong Dialog
function Dialog(){
    this.message = "hello";
}

// ke thua doi tuong EventEmitter
util.inherits(Dialog, EventEmitter);

// them hanh dong sayHello vao doi tuong Dialog;
Dialog.prototype.sayHello = function (data){ 
    console.log("Event: " + this.message + "; data: " + data);
    this.emit("hello", data);
}

var dialog = new Dialog(); // khoi tao doi tuong

dialog.on("hello", function(data){
    console.log("Co mot loi chao moi ! ", data);
});
dialog.sayHello("Mai hoa");