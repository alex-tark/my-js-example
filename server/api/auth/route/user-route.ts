"use strict";

import * as express from "express";
import {userController} from "../controller/user-controller";

export class UserRoutes {
  static init(router:express.Router) {
    router
      .route("/auth")
      .post(userController.authentificate);

    router
      .route("/auth/reg")
      .post(userController.createUser);

    router
      .route("/user")
      .get(userController.getUser);
  }
}
