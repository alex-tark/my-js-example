"use strict";

import * as express from "express";
import {ProfileController} from "../controller/profile-controller";
import {LocalUtils} from "../../../auth/local/utils";

export class ProfileRoutes {
  static init(router:express.Router) {
    router
      .route("/profile")
      .post(LocalUtils.middleware, ProfileController.getProfileByUsername);

  }
}
