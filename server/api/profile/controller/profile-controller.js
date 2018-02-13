"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var profile_dao_1 = require("../dao/profile-dao");
var ProfileController = /** @class */ (function () {
    function ProfileController() {
    }
    ProfileController.getProfileByBattletag = function (req, res) {
        var _battle_tag = req.body.battle_tag;
        profile_dao_1.default["findByBattleTag"](_battle_tag)
            .then(function (profile) { return res.status(201).json({ success: true, message: '', profile: profile }); })
            .catch(function (error) { return res.status(400).json({ success: false, message: error.message }); });
    };
    return ProfileController;
}());
exports.ProfileController = ProfileController;
//# sourceMappingURL=profile-controller.js.map