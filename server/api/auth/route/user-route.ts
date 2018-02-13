"use strict";

import * as express from "express";
import {AuthController} from "../controller/auth-controller";

export class AuthRoutes {
  static init(router:express.Router) {
    router
      .route("/auth")
      .post(AuthController.authenticate);

    router
      .route("/auth/reg")
      .post(AuthController.register);

    router
      .route("/auth/token")
      .post(AuthController.tokenStatus);
  }
}
