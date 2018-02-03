"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var todo_controller_1 = require("../controller/todo-controller");
var TodoRoutes = /** @class */ (function () {
    function TodoRoutes() {
    }
    TodoRoutes.init = function (router) {
        router
            .route("/api/todos")
            .get(todo_controller_1.TodoController.getAll)
            .post(todo_controller_1.TodoController.createTodo);
        router
            .route("/api/todos/:id")
            .delete(todo_controller_1.TodoController.deleteTodo);
    };
    return TodoRoutes;
}());
exports.TodoRoutes = TodoRoutes;
//# sourceMappingURL=todo-route.js.map