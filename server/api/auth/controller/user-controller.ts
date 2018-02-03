"use strict";

import * as express from "express";
import * as jwt     from "jsonwebtoken";
import userDAO from "../dao/user-dao";

const serverConst = require("@server/constants/server.json");

export class userController {

  static createUser(req:express.Request, res:express.Response) {
    let _user = req.body;

    userDAO
      ["createUser"](_user)
      .then(user => res.status(201).json(user))
      .catch(error => res.status(400).json(error));
  }

  static authentificate(req:express.Request, res:express.Response) {
    userDAO
      ['getByUsername'](req.body.username)
      .then((user) => {
        if (!user) { return res.status(401).json({}) }

        user.comparePassword(req.body.password)
          .then((matches) => {
            if (!matches) { return res.status(401).json({}) }

            let token = jwt.sign({ user }, serverConst.secret);
            res.status(200).json({ token });
          })
          .catch(error => res.status(400).json(error));
        res.status(200).json(user)
      })
      .catch(error => res.status(400).json(error));
  }

  static verify(headers) {
    if (headers && headers.authorization) {
      let split = headers.authorization.split(' ');
      if (split.length === 2) { return split[1]; }
      else { return null; }
    } else { return null; }
  }
}
