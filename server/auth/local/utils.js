"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HttpHeaders = require("../../constants/headers.json");
var LocalUtils = /** @class */ (function () {
    function LocalUtils() {
    }
    LocalUtils.middleware = function (req, res, next) {
        console.log(req.get(HttpHeaders.access_token));
        next();
    };
    return LocalUtils;
}());
exports.LocalUtils = LocalUtils;
//# sourceMappingURL=utils.js.map