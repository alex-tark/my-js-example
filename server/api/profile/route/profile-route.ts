"use strict";

import * as express from "express";
import {ProfileController} from "../controller/profile-controller";

export class ProfileRoutes {
  static init(router:express.Router) {
    router
      .route("/profile")
      .post(ProfileController.getProfileByBattletag);

  }
}
