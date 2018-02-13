import * as mongoose from "mongoose";
import * as Promise  from "bluebird";
import * as _        from "lodash";
import * as jwt      from "jsonwebtoken";
import TokenSchema   from "../model/token-model";

const serverConst = require("@server/constants/server.json");

TokenSchema.static("checkRelevance", (_access_token: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    if (!_access_token) { return reject(new TypeError("Access token is not valid object")); }

    jwt.verify(_access_token, serverConst.serverSecret, (error, decodedToken) => {
      if (error) { return reject(error); }
      if (!decodedToken.data) { return reject(new TypeError("Token is not valid object")); }
      if (decodedToken.expiresIn < Date.now()) { return reject(new Error("Token expired")); }

      let _query = { access_token: _access_token, username: decodedToken.data };
      Token.findOne(_query, (error, token) => {
        error
            ? reject(error)
            : resolve(token);
      });
    });
  });
});

TokenSchema.static("createToken", (_username: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    if (!_username) { return reject(new TypeError("Input data is not valid object")); }

    let _access_token = jwt.sign({
                          data: _username
                        }, serverConst.serverSecret, { expiresIn: 2592000000 }); //30d
    var _token = new Token({ access_token: _access_token, username: _username });
    _token.save((error, token) => {
      error
          ? reject(error)
          : resolve(token)
    });
  });
});

let Token = mongoose.model("Token", TokenSchema);

export default Token;
