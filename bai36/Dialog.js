'use strict';
var EventEmitter = require("events");

class Dialog extends EventEmitter{
    constructor(){
        super();
        this.message = "hello world !";
    }

    sayHello(data){
        return console.log(this.message + " " + data);
    }
}

module.exports = Dialog;