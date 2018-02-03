"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var Promise = require("bluebird");
var dbConst = require("@server/constants/db.json");
var DBConfig = /** @class */ (function () {
    function DBConfig() {
    }
    DBConfig.init = function () {
        var URL = (process.env.NODE_ENV === "production") ? process.env.MONGOHQ_URL
            : dbConst.localhost;
        mongoose.Promise = Promise;
        mongoose.connect(URL);
        mongoose.connection.on("error", console.error.bind(console, "An error ocurred with the DB connection: "));
    };
    return DBConfig;
}());
exports.DBConfig = DBConfig;
;
//# sourceMappingURL=db.conf.js.map