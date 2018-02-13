"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var token_dao_1 = require("../../api/auth/dao/token-dao");
var HttpHeaders = require("../../constants/headers.json");
var LocalUtils = /** @class */ (function () {
    function LocalUtils() {
    }
    LocalUtils.middleware = function (req, res, next) {
        var UserAccessTokenHeader = req.get(HttpHeaders.access_token);
        if (!UserAccessTokenHeader) {
            return res.status(401).json({ success: false, message: 'Access token is not valid object' });
        }
        token_dao_1.default["checkRelevance"](UserAccessTokenHeader)
            .then(function (token) { req.user = token; next(); })
            .catch(function (error) { return res.status(401).json({ success: false, message: 'Not valid token, permission denied' }); });
    };
    return LocalUtils;
}());
exports.LocalUtils = LocalUtils;
//# sourceMappingURL=utils.js.map