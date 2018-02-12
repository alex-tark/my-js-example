"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_controller_1 = require("../controller/user-controller");
var UserRoutes = /** @class */ (function () {
    function UserRoutes() {
    }
    UserRoutes.init = function (router) {
        router
            .route("/auth")
            .post(user_controller_1.userController.authentificate);
        router
            .route("/auth/reg")
            .post(user_controller_1.userController.createUser);
        router
            .route("/user")
            .get(user_controller_1.userController.getUser);
    };
    return UserRoutes;
}());
exports.UserRoutes = UserRoutes;
//# sourceMappingURL=user-route.js.map