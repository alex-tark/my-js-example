import * as express from "express";
import TokenDAO     from "../../api/auth/dao/token-dao";

const HttpHeaders = require("../../constants/headers.json");

export class LocalUtils {
  static middleware(req:express.Request, res:express.Response, next:express.NextFunction) {
    let UserAccessTokenHeader = req.get(HttpHeaders.access_token);
    if (!UserAccessTokenHeader) { return res.status(401).json({ success: false, message: 'Access token is not valid object' }) }

    TokenDAO
      ["checkRelevance"](UserAccessTokenHeader)
      .then(token => { req.user = token; next(); })
      .catch(error => res.status(401).json({ success: false, message: 'Not valid token, permission denied' }));
  }
}
