"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("fs");
var path = require("path");
var StaticDispatcher = /** @class */ (function () {
    function StaticDispatcher() {
    }
    StaticDispatcher.sendLanding = function (req, res) {
        var _root = process.cwd();
        res.type('.html');
        fs.createReadStream(path.join(_root + "/client/public/index.html")).pipe(res);
    };
    StaticDispatcher.sendDashboard = function (req, res) {
        var _root = process.cwd();
        res.type(".html");
        fs.createReadStream(path.join(_root + "/client/public/dashboard.html")).pipe(res);
    };
    StaticDispatcher.sendDocumentation = function (req, res) {
        var _root = process.cwd();
        res.type('.html');
        fs.createReadStream(path.join(_root + "/doc/index.html")).pipe(res);
    };
    return StaticDispatcher;
}());
exports.StaticDispatcher = StaticDispatcher;
//# sourceMappingURL=index.js.map