"use strict";

import * as express from "express";
import {UserController} from "../controller/user-controller";

export class UserRoutes {
  static init(router:express.Router) {
    router
      .route("/auth")
      .post(UserController.authentificate);

    router
      .route("/auth/reg")
      .post(UserController.createUser);

    router
      .route("/user")
      .get(UserController.getUser);
  }
}
