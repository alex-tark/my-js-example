"use strict";

import * as PassportJWT from 'passport-jwt';
import * as User        from '@server/api/auth/model/user-model';

const ExtractJWT  = PassportJWT.ExtractJwt;
const Strategy    = PassportJWT.Strategy;
const serverConst = require("@server/constants/server.json");

export class LocalPassport {
  static init(passport: any): void {
    let params = {
      secretOrKey: serverConst.secret,
      jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken()
    };

    passport.use(new Strategy(params, (payload, callback) => {
      User.findOne({ id: payload.id }, (error, user) => {
        if (error) { return callback(error, false); }
        if (user)  { return callback(null, user); }
        else { callback(null, false); }
      });
    }));
  }
}



