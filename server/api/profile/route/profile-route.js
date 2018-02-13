"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var profile_controller_1 = require("../controller/profile-controller");
var ProfileRoutes = /** @class */ (function () {
    function ProfileRoutes() {
    }
    ProfileRoutes.init = function (router) {
        router
            .route("/profile")
            .post(profile_controller_1.ProfileController.getProfileByBattletag);
    };
    return ProfileRoutes;
}());
exports.ProfileRoutes = ProfileRoutes;
//# sourceMappingURL=profile-route.js.map