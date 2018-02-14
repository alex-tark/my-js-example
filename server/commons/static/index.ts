"use strict";

import * as express from "express";
import * as fs from "fs";
import * as path from "path";

export class StaticDispatcher {
    static sendLanding(req: express.Request, res: express.Response):void {
      const _root = process.cwd();

      res.type('.html');

      fs.createReadStream(path.join(`${_root}/client/public/index.html`)).pipe(res);
    }

    static sendDashboard(req: express.Request, res: express.Response):void {
      const _root = process.cwd();

      res.type(".html");

      fs.createReadStream(path.join(`${_root}/client/public/dashboard.html`)).pipe(res);
    }

    static sendDocumentation(req: express.Request, res: express.Response):void {
      const _root = process.cwd();

      res.type('.html');

      fs.createReadStream(path.join(`${_root}/doc/index.html`)).pipe(res);
    }
}
