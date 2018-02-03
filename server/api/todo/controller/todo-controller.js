"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var todo_dao_1 = require("../dao/todo-dao");
var TodoController = /** @class */ (function () {
    function TodoController() {
    }
    TodoController.getAll = function (req, res) {
        todo_dao_1.default["getAll"]()
            .then(function (todos) { return res.status(200).json(todos); })
            .catch(function (error) { return res.status(400).json(error); });
    };
    TodoController.getById = function (req, res) {
        todo_dao_1.default["getById"](req.params.id)
            .then(function (todo) { return res.status(200).json(todo); })
            .catch(function (error) { return res.status(400).json(error); });
    };
    TodoController.createTodo = function (req, res) {
        var _todo = req.body;
        todo_dao_1.default["createTodo"](_todo)
            .then(function (todo) { return res.status(201).json(todo); })
            .catch(function (error) { return res.status(400).json(error); });
    };
    TodoController.deleteTodo = function (req, res) {
        var _id = req.params.id;
        todo_dao_1.default["deleteTodo"](_id)
            .then(function () { return res.status(200).end(); })
            .catch(function (error) { return res.status(400).json(error); });
    };
    return TodoController;
}());
exports.TodoController = TodoController;
//# sourceMappingURL=todo-controller.js.map