"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var passport = require("passport");
var LocalAuth = require("@server/auth/local");
var serverConst = require("@server/constants/server.json");
var AuthConfig = /** @class */ (function () {
    function AuthConfig() {
    }
    AuthConfig.init = function (application) {
        LocalAuth(passport);
        application.use(passport.initialize());
        application.set('appsecret', serverConst.secret);
    };
    return AuthConfig;
}());
exports.AuthConfig = AuthConfig;
//# sourceMappingURL=auth.conf.js.map