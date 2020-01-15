var Todos = require("../models/todoModel");

module.exports = function (app){
    app.get("/api/setupTodos", function(request, response){

        // setup seed data
        var seedTodos = [
            {
                text: "Hoc NodeJS",
                isDone: false
            },
            {
                text: "Hoc AngularJs",
                isDone: false
            },
            {
                text: "Viet mot ung dung hoan chinh",
                isDone: false
            }
        ];

        Todos.create(seedTodos, function (error, results){
            response.send(results);
        });

    });
}