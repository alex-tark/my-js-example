"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var Promise = require("bluebird");
var _ = require("lodash");
var profile_model_1 = require("../model/profile-model");
profile_model_1.default.static("findByUsername", function (_username) {
    return new Promise(function (resolve, reject) {
        if (!_username) {
            return reject(new TypeError("Username is not valid object"));
        }
        var query = { username: _username };
        Profile.findOne(query, function (error, profile) {
            error
                ? reject(error)
                : resolve(profile);
        });
    });
});
profile_model_1.default.static("createProfile", function (_profile) {
    return new Promise(function (resolve, reject) {
        if (!_.isObject(_profile)) {
            return reject(new TypeError('Profile is not valid object'));
        }
        var profile = new Profile(_profile);
        profile.save(function (error, profileSaved) {
            error
                ? reject(error)
                : resolve(profileSaved);
        });
    });
});
var Profile = mongoose.model("Profile", profile_model_1.default);
exports.default = Profile;
//# sourceMappingURL=profile-dao.js.map