"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var auth_controller_1 = require("../controller/auth-controller");
var AuthRoutes = /** @class */ (function () {
    function AuthRoutes() {
    }
    AuthRoutes.init = function (router) {
        router
            .route("/auth")
            .post(auth_controller_1.AuthController.authenticate);
        router
            .route("/auth/reg")
            .post(auth_controller_1.AuthController.register);
        router
            .route("/auth/token")
            .post(auth_controller_1.AuthController.tokenStatus);
    };
    return AuthRoutes;
}());
exports.AuthRoutes = AuthRoutes;
//# sourceMappingURL=user-route.js.map