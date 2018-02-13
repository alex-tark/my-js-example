"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var profile_controller_1 = require("../controller/profile-controller");
var utils_1 = require("../../../auth/local/utils");
var ProfileRoutes = /** @class */ (function () {
    function ProfileRoutes() {
    }
    ProfileRoutes.init = function (router) {
        router
            .route("/profile")
            .get(utils_1.LocalUtils.middleware, profile_controller_1.ProfileController.getProfileByUsername);
        router
            .route("/profile")
            .post(utils_1.LocalUtils.middleware, profile_controller_1.ProfileController.createProfile);
    };
    return ProfileRoutes;
}());
exports.ProfileRoutes = ProfileRoutes;
//# sourceMappingURL=profile-route.js.map