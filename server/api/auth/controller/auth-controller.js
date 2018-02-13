"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user_dao_1 = require("../dao/user-dao");
var token_dao_1 = require("../dao/token-dao");
var AuthController = /** @class */ (function () {
    function AuthController() {
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
    AuthController.register = function (req, res) {
        var _user = req.body;
        user_dao_1.default["createUser"](_user)
            .then(function (user) { return res.status(201).json({ success: true, messge: "User " + user.username + " created", username: user.username }); })
            .catch(function (error) { return res.status(400).json({ success: false, message: error.message }); });
    };
    /**
     * @api{POST} /auth Authentication
     * @apiVersion 0.0.2
     * @apiName  Authentication
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
    AuthController.authenticate = function (req, res) {
        var _user = req.body;
        user_dao_1.default["findByUsername"](_user.username)
            .then(function (user) {
            if (!user) {
                return res.status(401).json({});
            }
            user.comparePassword(req.body.password, function (error, matches) {
                if (matches && !error) {
                    token_dao_1.default["createToken"]
                        .then(function (token) { return res.status(201).json({ success: true, message: 'Token granted', access_token: token }); })
                        .catch(function (error) { return res.status(401).json({ success: false, message: error.message }); });
                }
                else {
                    res.status(401).json({ success: false, message: 'Authentication failed. Wrong password.' });
                }
            });
        })
            .catch(function (error) { return res.status(400).json(error); });
    };
    AuthController.tokenStatus = function (req, res) {
        var _token = req.body.access_token;
        token_dao_1.default["checkRelevance"](_token)
            .then(function (token) { return res.status(200).json({ success: true, message: 'Token is available', access_token: token.access_token }); })
            .catch(function (error) { return res.status(400).json({ success: false, message: error.message }); });
    };
    return AuthController;
}());
exports.AuthController = AuthController;
//# sourceMappingURL=auth-controller.js.map