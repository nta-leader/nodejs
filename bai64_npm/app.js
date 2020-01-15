var _ = require("lodash");

var array = [1];
var other = _.concat(array, 2, [3], [[4]]);

console.log(other);
console.log(array);

var newResult = _.difference([2, 1], [2, 3]);
console.log(newResult);

// collection
var users = [
    {"user": "anh", "age": 30 , "active": true},
    {"user": "the", "age": 40 , "active": true},
    {"user": "nguyen", "age": 20 , "active": false}
];

var user = _.find(users, function(user){
    return user.age < 40 && user.active === true;
});

var user2 = _.find(users, function(user){
    return user.age < 40;
});

console.log("Find: ",user);
console.log("Find: ",user2);