var Todos = require("../models/todoModel");

function getTodos(response){
    Todos.find(function (error, todos){
        if(error){
            response.send(error);
        }else{
            response.json(todos);
        }
    });
}

module.exports = function (app){

    //get all todos
    app.get("/api/todos", function (request, response){
        getTodos(response);
    });

    app.get("/api/todo/:id", function (request, response){
        Todos.findById({_id: request.params.id}, function (error, todo){
            if(error){
                throw error;
            }else{
                response.json(todo);
            }
        });
    });

    app.post("/api/todo", function (request, response){
        var todo = {
            text: request.body.text,
            isDone: request.body.isDone
        };
        Todos.create(todo, function(error, todo){
            if(error){
                throw error;
            }else{
                getTodos(response);
            }
        });
    });

    app.put("/api/todo", function (request, response){
        if(!request.body.id){
            return response.status(500).send("ID is required");
        }else{
            Todos.update({
                _id: request.body.id
            },{
                text: request.body.text,
                isDone: request.body.isDone
            }, function(error, todo){
                if(error){
                    return response.status(500).json(error);
                }else{
                    getTodos(response);
                }
            });
        }
    });

    app.delete("/api/todo/:id", function (request, response){
        Todos.remove({
            _id: request.params.id
        }, function (error, todo){
            if(error){
                return response.status(500).json(error);
            }else{
                getTodos(response);
            }
        });
    })
}