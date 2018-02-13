"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jwt = require("jsonwebtoken");
var user_dao_1 = require("../dao/user-dao");
var serverConst = require("@server/constants/server.json");
var userController = /** @class */ (function () {
    function userController() {
    }
    /**
     * @api{POST} /auth/reg Registration
     * @apiVersion 0.0.2
     * @apiName  Register
     * @apiGroup OAuth
     *
     * @apiParam{String}    username Unique user login name
     * @apiParam{String}    password Custom user password
     *
     * @apiSuccess{Boolean}  success  Final request flag
     * @apiSuccess{String}   message  Server request message
     * @apiSuccess{username} username Unique user login
     *
     * @apiSuccessExample Success registration response example:
     * {
     *    success: true,
     *    message: "User Vitalya332 created",
     *    username: "Vitalya332"
     * }
     */
    userController.createUser = function (req, res) {
        var _user = req.body;
        user_dao_1.default["createUser"](_user)
            .then(function (user) { return res.status(201).json({ success: true, messge: "User " + user.username + " created", username: user.username }); })
            .catch(function (error) { return res.status(400).json({ success: false, message: error.message }); });
    };
    /**
     * @api{POST} /auth Authentication
     * @apiVersion 0.0.2
     * @apiName  Authentificate
     * @apiGroup OAuth
     *
     * @apiParam {String} username Unique user login name
     * @apiParam {String} password Custom user password
     *
     * @apiSuccess{Boolean} success       Final request flag
     * @apiSuccess{String}  message       Server request message
     * @apiSuccess{String}  access_token  OAuth grand access token
     *
     * @apiSuccessExample Success authentication response example:
     * {
     *    success: true,
     *    message: "Token granted",
     *    access_token: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
     * }
     */
    userController.authentificate = function (req, res) {
        var _user = req.body;
        user_dao_1.default["findByUsername"](_user.username)
            .then(function (user) {
            if (!user) {
                return res.status(401).json({});
            }
            user.comparePassword(req.body.password, function (error, matches) {
                if (matches && !error) {
                    var token = jwt.sign({ user: user }, serverConst.secret);
                    res.send(201).json({ success: true, message: 'Token granted', access_token: token });
                }
                else {
                    res.status(401).json({ success: false, message: 'Authentication failed. Wrong password.' });
                }
            });
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
    userController.getUser = function (req, res) {
        res.status(200).json({});
    };
    return userController;
}());
exports.userController = userController;
//# sourceMappingURL=user-controller.js.map