/// <reference path="../typings/index.d.ts" />
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
if (process.env.NODE_ENV === "production")
    require("newrelic");
var PORT = process.env.PORT || 3333;
var express = require("express");
var os = require("os");
var http = require("http");
var routes_conf_1 = require("./config/routes.conf");
var auth_conf_1 = require("./config/auth.conf");
var db_conf_1 = require("./config/db.conf");
var index_1 = require("./routes/index");
var app = express();
routes_conf_1.RoutesConfig.init(app);
auth_conf_1.AuthConfig.init(app);
db_conf_1.DBConfig.init();
index_1.Routes.init(app, express.Router());
http.createServer(app)
    .listen(PORT, function () {
    console.log("up and running @: " + os.hostname() + " on port: " + PORT);
    console.log("enviroment: " + process.env.NODE_ENV);
});
//# sourceMappingURL=server.js.map