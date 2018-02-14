"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var todo_route_1 = require("../api/todo/route/todo-route");
var user_route_1 = require("../api/auth/route/user-route");
var profile_route_1 = require("../api/profile/route/profile-route");
var index_1 = require("../commons/static/index");
var Routes = /** @class */ (function () {
    function Routes() {
    }
    Routes.init = function (app, router) {
        todo_route_1.TodoRoutes.init(router);
        user_route_1.AuthRoutes.init(router);
        profile_route_1.ProfileRoutes.init(router);
        app
            .route("/dashboard")
            .get(index_1.StaticDispatcher.sendDashboard);
        app
            .route("/api")
            .get(index_1.StaticDispatcher.sendDocumentation);
        app
            .route("/*")
            .get(index_1.StaticDispatcher.sendLanding);
        app.use("/api/v1", router);
    };
    return Routes;
}());
exports.Routes = Routes;
//# sourceMappingURL=index.js.map