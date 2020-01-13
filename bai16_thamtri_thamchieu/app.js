// by value: bien tham tri ; by reference: bien tham chieu

function changeByValue(b){
    b=2;
}

var a = 1;
changeByValue(a);
// bien a khong bi thay doi gia tri
console.log(a);

function changeByReference(object){
    object.name = "test by reference";
}

var c = {}; // kieu object
c.name = "test";
changeByReference(c);
console.log(c);