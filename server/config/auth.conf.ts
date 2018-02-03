"use strict";

import * as express  from "express";
import * as passport from "passport";

const LocalAuth   = require("@server/auth/local");
const serverConst = require("@server/constants/server.json");

export class AuthConfig {
  static init(application: express.Application):void {
    LocalAuth(passport);

    application.use(passport.initialize());
    application.set('appsecret', serverConst.secret);
  }
}
