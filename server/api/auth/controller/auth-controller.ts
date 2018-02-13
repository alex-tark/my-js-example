"use strict";

import * as express from "express";
import * as jwt     from "jsonwebtoken";
import UserDAO      from "../dao/user-dao";
import TokenDAO     from "../dao/token-dao";

export class AuthController {

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
  static register(req:express.Request, res:express.Response) {
    let _user = req.body;

    UserDAO
      ["createUser"](_user)
      .then(user => res.status(201).json({ success: true, messge: `User ${ user.username } created`, username: user.username }))
      .catch(error => res.status(400).json({ success: false, message: error.message }));
  }

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
  static authenticate(req:express.Request, res:express.Response) {
    let _user = req.body;

    UserDAO
      ["findByUsername"](_user.username)
      .then((user) => {
        if (!user) { return res.status(401).json({}) }

        user.comparePassword(req.body.password, (error, matches) => {
          if (matches && !error) {
            TokenDAO
              ["createToken"]
              .then(token => res.status(201).json({ success: true, message: 'Token granted', access_token: token }))
              .catch(error => res.status(401).json({ success: false, message: error.message }));
          } else {
            res.status(401).json({ success: false, message: 'Authentication failed. Wrong password.' });
          }
        });
      })
      .catch((error) => res.status(400).json(error));
  }

  static tokenStatus(req:express.Request, res:express.Response) {
    let _token = req.body.access_token;

    TokenDAO
      ["checkRelevance"](_token)
      .then(token => res.status(200).json({ success: true, message: 'Token is available', access_token: token.access_token }))
      .catch(error => res.status(400).json({ success: false, message: error.message }));
  }
}
