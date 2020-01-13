function sayHello(){
    console.log("Hello nodejs");
}

sayHello();

// first-classs function
function logSaying(fn){
    fn();
}
logSaying(sayHello);

//function expression
var sayGoodbye = function (){
    console.log("Good bye !");
}
sayGoodbye();