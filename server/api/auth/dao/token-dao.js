"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var Promise = require("bluebird");
var jwt = require("jsonwebtoken");
var token_model_1 = require("../model/token-model");
var serverConst = require("@server/constants/server.json");
token_model_1.default.static("checkRelevance", function (_access_token) {
    return new Promise(function (resolve, reject) {
        if (!_access_token) {
            return reject(new TypeError("Access token is not valid object"));
        }
        jwt.verify(_access_token, serverConst.serverSecret, function (error, decodedToken) {
            if (error) {
                return reject(error);
            }
            if (!decodedToken.data) {
                return reject(new TypeError("Token is not valid object"));
            }
            if (decodedToken.expiresIn < Date.now()) {
                return reject(new Error("Token expired"));
            }
            var _query = { access_token: _access_token, username: decodedToken.data };
            Token.findOne(_query, function (error, token) {
                error
                    ? reject(error)
                    : resolve(token);
            });
        });
    });
});
token_model_1.default.static("createToken", function (_username) {
    return new Promise(function (resolve, reject) {
        if (!_username) {
            return reject(new TypeError("Input data is not valid object"));
        }
        var _access_token = jwt.sign({
            data: _username
        }, serverConst.serverSecret, { expiresIn: 2592000000 }); //30d
        var _token = new Token({ access_token: _access_token, username: _username });
        _token.save(function (error, token) {
            error
                ? reject(error)
                : resolve(token);
        });
    });
});
var Token = mongoose.model("Token", token_model_1.default);
exports.default = Token;
//# sourceMappingURL=token-dao.js.map