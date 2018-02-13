"use strict";

import * as express from "express";
import ProfileDAO   from "../dao/profile-dao";

export class ProfileController {
  static getProfileByBattletag(req: express.Request, res: express.Response) {
    let _battle_tag = req.body.battle_tag;

    ProfileDAO
      ["findByBattleTag"](_battle_tag)
      .then(profile => res.status(201).json({ success: true, message: '', profile }))
      .catch(error  => res.status(400).json({ success: false, message: error.message }))
  }
}
