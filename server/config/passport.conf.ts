import * as express   from "express";
import * as passport  from "passport";
import LocalPassport  from "@server/auth/local";

const serverConst = require("@server/constants/server.json");

export class PassportConfig {
  static init(application: express.Application) {
    LocalPassport.init(passport);

    application.use(passport.initialize());
    application.set('appsecret', serverConst.secret);
  }
}
