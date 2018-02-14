"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var morgan = require("morgan");
var bodyParser = require("body-parser");
var helmet = require("helmet");
var compression = require("compression");
var cors = require("cors");
var zlib = require("zlib");
var RoutesConfig = /** @class */ (function () {
    function RoutesConfig() {
    }
    RoutesConfig.init = function (application) {
        var _root = process.cwd();
        var _nodeModules = "/node_modules/";
        var _jspmPackages = "/jspm_packages/";
        var _public = "/client/public/";
        var _doc = "/doc/";
        application.use(compression({
            level: zlib.Z_BEST_COMPRESSION,
            threshold: "1kb"
        }));
        application.use(express.static(_root + _nodeModules));
        application.use(express.static(_root + _jspmPackages));
        application.use(express.static(_root + _public));
        application.use(express.static(_root + _doc));
        application.use(bodyParser.json());
        application.use(morgan("dev"));
        application.use(cors());
        application.use(helmet());
    };
    return RoutesConfig;
}());
exports.RoutesConfig = RoutesConfig;
//# sourceMappingURL=routes.conf.js.map