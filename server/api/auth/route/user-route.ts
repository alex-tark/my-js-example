"use strict";

import * as express from "express";
import {userController} from "../controller/user-controller";

export class UserRoutes {
  static init(router:express.Router) {
    router
      .route("/api/v1/auth")
      .post(userController.authentificate);

    router
      .route("/api/v1/auth/reg")
      .post(userController.createUser);
  }
}
