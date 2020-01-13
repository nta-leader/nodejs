// khởi tạo và sự kế thừa

function Person(name, password){
    this.name = name;
    this.password = password;
}

Person.prototype.getName = function (){
    return this.name;
}

Person.prototype.getPassword = function (){
    return this.password;
}

Person.prototype.level = "admin";

/*function User(name){
    this.name = name;
}*/

User.prototype = new Person(); //ke thua tu person

var person = new Person("Theanh", "123123");
var user = new User("Teo", "0000");

console.log(user.getName()); // neu la function thi co them ()
console.log(user.getPassword());