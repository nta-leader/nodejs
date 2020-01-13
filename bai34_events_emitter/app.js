var util = require("util");

function Person(){
    this.firstName = "Hoa";
    this.lastName = "Mai";
}

Person.prototype.sayHello = function (){
    console.log("Hello " + this.firstName + " " + this.lastName);
}

function Student(){
    Person.call(this);// ke thua ham khoi tao cua Person
    this.id = "123";
}

util.inherits(Student, Person);

var sv = new Student();
sv.sayHello();