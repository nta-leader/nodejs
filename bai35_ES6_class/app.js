// ES6 class
'use strict'; // che do nghiem nghat

class Person {
    // ham khoi tao
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    // dinh nghia function
    sayHello() {
        return this.firstName + " " + this.lastName;
    }
}

var hoa = new Person("Hoa", "Phuong");
console.log(hoa.sayHello());

var phuong = new Person("Phuong", "Yen");

console.log(hoa.__proto__);
console.log(phuong.__proto__);
console.log(phuong.__proto__ === hoa.__proto__);