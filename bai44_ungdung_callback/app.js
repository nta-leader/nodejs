function readDatabase(callback){
    //read done
    var user = {
        name: "Mai Hoa"
    }
    callback(user);
}

readDatabase(function(data){
    console.log("Read done callback ",data);
});

readDatabase(function(data){
    console.log("Read done callback 2,  ",data.name);
});