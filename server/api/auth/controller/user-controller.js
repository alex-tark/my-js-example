"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jwt = require("jsonwebtoken");
var user_dao_1 = require("../dao/user-dao");
var serverConst = require("@server/constants/server.json");
var userController = /** @class */ (function () {
    function userController() {
    }
    userController.createUser = function (req, res) {
        var _user = req.body;
        user_dao_1.default["createUser"](_user)
            .then(function (user) { return res.status(201).json(user); })
            .catch(function (error) { return res.status(400).json(error); });
    };
    userController.authentificate = function (req, res) {
        user_dao_1.default['getByUsername'](req.body.username)
            .then(function (user) {
            if (!user) {
                return res.status(401).json({});
            }
            user.comparePassword(req.body.password)
                .then(function (matches) {
                if (!matches) {
                    return res.status(401).json({});
                }
                var token = jwt.sign({ user: user }, serverConst.secret);
                res.status(200).json({ token: token });
            })
                .catch(function (error) { return res.status(400).json(error); });
            res.status(200).json(user);
        })
            .catch(function (error) { return res.status(400).json(error); });
    };
    userController.verify = function (headers) {
        if (headers && headers.authorization) {
            var split = headers.authorization.split(' ');
            if (split.length === 2) {
                return split[1];
            }
            else {
                return null;
            }
        }
        else {
            return null;
        }
    };
    return userController;
}());
exports.userController = userController;
//# sourceMappingURL=user-controller.js.map