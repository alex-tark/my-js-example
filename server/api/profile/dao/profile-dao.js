"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var Promise = require("bluebird");
var profile_model_1 = require("../model/profile-model");
profile_model_1.default.static("findByBattleTag", function (_battle_tag) {
    return new Promise(function (resolve, reject) {
        if (!_battle_tag) {
            return reject(new TypeError("Battle tag is not valid object"));
        }
        var query = { battle_tag: _battle_tag };
        Profile.findOne(query, function (error, profile) {
            error
                ? reject(error)
                : resolve(profile);
        });
    });
});
var Profile = mongoose.model("Profile", profile_model_1.default);
exports.default = Profile;
//# sourceMappingURL=profile-dao.js.map