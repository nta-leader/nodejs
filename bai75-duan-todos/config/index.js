var configValues = require("./config.json");

module.exports = {
    getDbConnectionString: function (){
        return `mongodb://${configValues.username}:${configValues.password}@localhost:27017/${configValues.db}`;
    },
    getDbConnectionStringLocalhost: function (){
        return `mongodb://localhost/${configValues.db}`;
    }
}