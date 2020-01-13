var Emitter = require("events");
var eventConfig = require("./config").events;
var emitter =  new Emitter();

emitter.on(eventConfig.BAD_SCORE, function (){
    console.log("Mot mon nao do bi diem kem !");
});

emitter.on(eventConfig.BAD_SCORE, function (){
    console.log("Da co diem kem, can phat thong bao toi phu huynh !");
});

// co 1 bang diem
var scores = [10, 4];

for(var s of scores){
    if(s < 5){
        console.log("Diem thap qua ", s);
        emitter.emit(eventConfig.BAD_SCORE);
    }
}