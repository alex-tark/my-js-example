"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_controller_1 = require("../controller/user-controller");
var UserRoutes = /** @class */ (function () {
    function UserRoutes() {
    }
    UserRoutes.init = function (router) {
        router
            .route("/api/v1/auth")
            .post(user_controller_1.userController.authentificate);
        router
            .route("/api/v1/auth/reg")
            .post(user_controller_1.userController.createUser);
    };
    return UserRoutes;
}());
exports.UserRoutes = UserRoutes;
//# sourceMappingURL=user-route.js.map