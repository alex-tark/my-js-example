"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var Promise = require("bluebird");
var _ = require("lodash");
var bcrypt = require("bcrypt");
var user_model_1 = require("../model/user-model");
user_model_1.default.static("findByUsername", function (_username) {
    return new Promise(function (resolve, reject) {
        if (!_username) {
            return reject(new TypeError("Username is not valid object"));
        }
        var query = { username: _username };
        User.findOne(query, function (error, user) {
            error
                ? reject(error)
                : resolve(user);
        });
    });
});
user_model_1.default.static("createUser", function (user) {
    return new Promise(function (resolve, reject) {
        if (!_.isObject(user)) {
            return reject(new TypeError("User is not valid object"));
        }
        var _user = new User(user);
        _user.save(function (error, user) {
            error
                ? reject(error)
                : resolve(user);
        });
    });
});
user_model_1.default.method("comparePassword", function (password, callback) {
    bcrypt.compare(password, this.password, function (error, matches) {
        if (error) {
            return callback(error, false);
        }
        callback(null, matches);
    });
});
var User = mongoose.model("User", user_model_1.default);
exports.default = User;
//# sourceMappingURL=user-dao.js.map