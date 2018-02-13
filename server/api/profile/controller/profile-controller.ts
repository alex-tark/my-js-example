"use strict";

import * as express from "express";
import ProfileDAO   from "../dao/profile-dao";
import {token} from "morgan";
import passport = require("passport");

export class ProfileController {
  /**
   * @api{GET} /profile Get Profile
   * @apiVersion 0.0.1
   * @apiName  GetProfile
   * @apiGroup Profile
   *
   * @apiSuccess{Boolean} success   Final request flag
   * @apiSuccess{String}  message   Server request message
   * @apiSuccess{Profile} profile  User profile data

   * @apiSuccessExample Success request example:
   * {
   *    success: true,
   *    message: "Vitalya332 profile",
   *    profile: {
   *        username: "Vitalya332",
   *        email: "vitya332@gmail.com",
   *        battle_tag: "VityaNagibator#2223",
   *        user_id: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
   *        last_visit: 1518509032811
   *    }
   * }
   */
  static getProfileByUsername(req: express.Request, res: express.Response) {
    let _user = req.user;

    ProfileDAO
      ["findByUsername"](_user.username)
      .then(profile => res.status(201).json({ success: true, message: `${ profile.username } profile`, profile }))
      .catch(error  => res.status(400).json({ success: false, message: error.message }));
  }

  /**
   * @api{POST} /profile Create Profile
   * @apiVersion 0.0.1
   * @apiName  CreateProfile
   * @apiGroup Profile
   *
   * @apiParam {String} username   User login
   * @apiParam {String} email      User email
   * @apiParam {String} battle_tag Unique blizzard battle tag
   * @apiParam {String} user_id    Hashable user_id
   * @apiParam {Date}   last_visit Last activity time
   *
   * @apiSuccess{Boolean} success   Final request flag
   * @apiSuccess{String}  message   Server request message
   * @apiSuccess{Profile} profile  User profile data

   * @apiSuccessExample Success request example:
   * {
   *    success: true,
   *    message: "Vitalya332 profile created",
   *    profile: {
   *        username: "Vitalya332",
   *        email: "vitya332@gmail.com",
   *        battle_tag: "VityaNagibator#2223",
   *        user_id: "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
   *        last_visit: 1518509032811
   *    }
   * }
   */
  static createProfile(req: express.Request, res: express.Response) {
    let _profile = req.body;
    console.log(req.user);

    ProfileDAO
      ["createProfile"](_profile)
      .then(profile => res.status(200).json({ success: true, message: `${ profile.username } profile created`, profile: _profile }))
      .catch(error => res.status(400).json({ success: false, message: error.message }));
  }
}
