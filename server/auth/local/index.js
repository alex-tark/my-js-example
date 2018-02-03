"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PassportJWT = require("passport-jwt");
var User = require('@server/api/auth/model/user-model');
var ExtractJWT = PassportJWT.ExtractJwt;
var Strategy = PassportJWT.Strategy;
var serverConst = require("@server/constants/server.json");
module.exports = function (passport) {
    var params = {
        secretOrKey: serverConst.secret,
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken()
    };
    passport.use(new Strategy(params, function (payload, callback) {
        User.findOne({ id: payload.id }, function (error, user) {
            if (error) {
                return callback(error, false);
            }
            if (user) {
                return callback(null, user);
            }
            else {
                callback(null, false);
            }
        });
    }));
};
//# sourceMappingURL=index.js.map