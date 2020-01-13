var firstFunction = function (){
    console.log("I am first !");
}

var secondFunction = function (){
    setTimeout(firstFunction, 5000);
    console.log("I am second !!");
}

secondFunction();