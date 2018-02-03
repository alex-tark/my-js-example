"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var StaticDispatcher = /** @class */ (function () {
    function StaticDispatcher() {
    }
    StaticDispatcher.sendIndex = function (req, res) {
        var _root = process.cwd();
        var _env = process.env.NODE_ENV;
        var _folder = _env === "production" ? "dist" : "dev";
        res.type(".html");
        fs.createReadStream(path.join(_root + "/client/" + _folder + "/index.html")).pipe(res);
    };
    return StaticDispatcher;
}());
exports.StaticDispatcher = StaticDispatcher;
//# sourceMappingURL=index.js.map