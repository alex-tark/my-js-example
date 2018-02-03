"use strict";

import * as PassportJWT from 'passport-jwt';

const User        = require('@server/api/auth/model/user-model');
const ExtractJWT  = PassportJWT.ExtractJwt;
const Strategy    = PassportJWT.Strategy;
const serverConst = require("@server/constants/server.json");

module.exports = (passport: any): void  => {
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
