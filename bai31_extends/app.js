var EventEmitter = require("events");
var util = require("util");

function Dialog(){
    this.message = "hello";
}

util.inherits(Dialog, EventEmitter);

Dialog.prototype.sayHello = function (){
    console.log("Event: " + this.message);
    this.emit("hello");
}

var dialog = new Dialog();

dialog.on("hello", function(){
    console.log("Co mot loi chao moi !");
});
dialog.sayHello();