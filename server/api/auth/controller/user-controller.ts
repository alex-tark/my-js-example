"use strict";

import * as express from "express";
import * as jwt     from "jsonwebtoken";
import userDAO      from "../dao/user-dao";
import {error} from "protractor/built/logger";

const serverConst = require("@server/constants/server.json");

export class userController {

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
  static createUser(req:express.Request, res:express.Response) {
    let _user = req.body;

    userDAO
      ["createUser"](_user)
      .then(user => res.status(201).json({ success: true, messge: `User ${ user.username } created`, username: user.username }))
      .catch(error => res.status(400).json({ success: false, message: error.message }));
  }

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
  static authentificate(req:express.Request, res:express.Response) {
    let _user = req.body;

    userDAO
      ["findByUsername"](_user.username)
      .then((user) => {
        if (!user) { return res.status(401).json({}) }

        user.comparePassword(req.body.password, (error, matches) => {
          if (matches && !error) {
            const token = jwt.sign({ user }, serverConst.secret);
            res.status(201).json({ success: true, message: 'Token granted', access_token: token });
          } else {
            res.status(401).json({ success: false, message: 'Authentication failed. Wrong password.' });
          }
        });
      })
      .catch((error) => res.status(400).json(error));
  }

  static verify(headers) {
    if (headers && headers.authorization) {
      let split = headers.authorization.split(' ');
      if (split.length === 2) { return split[1]; }
      else { return null; }
    } else { return null; }
  }

  static getUser(req: express.Request, res: express.Response) {
    res.status(200).json({});
  }
}
