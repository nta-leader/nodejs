var hello1 = require("./hello1");
hello1();

var hello2 = require("./hello2");
hello2.sayHello();

var hello3 = require("./hello3");
hello3.sayHello();

hello3.message = "hello 3 nodejs";
hello3.sayHello();

var Hello4 = require("./hello4");
var hello4 = new Hello4();
hello4.sayHello();

var hello5 = require("./hello5");
hello5.sayHello();