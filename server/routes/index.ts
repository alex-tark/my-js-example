import * as express from "express";
import {TodoRoutes} from "../api/todo/route/todo-route";
import {UserRoutes} from "../api/auth/route/user-route";
import {ProfileRoutes} from "../api/profile/route/profile-route";

import {StaticDispatcher} from "../commons/static/index";


export class Routes {
   static init(app: express.Application, router: express.Router) {

     TodoRoutes.init(router);
     UserRoutes.init(router);
     ProfileRoutes.init(router);

     app
       .route("/")
       .get(StaticDispatcher.sendIndex);

     app
       .route("/api")
       .get(StaticDispatcher.sendDocumentation);

     app.use("/api/v1", router);
   }
}
