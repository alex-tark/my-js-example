import * as express from "express";
const HttpHeaders = require("../../constants/headers.json");

export class LocalUtils {
  static middleware(req:express.Request, res:express.Response, next:express.NextFunction) {
    console.log(req.get(HttpHeaders.access_token));

    next();
  }
}
