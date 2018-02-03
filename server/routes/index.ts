import * as express from "express";
import {TodoRoutes} from "../api/todo/route/todo-route";
import {UserRoutes} from "../api/auth/route/user-route";

import {StaticDispatcher} from "../commons/static/index";


export class Routes {
   static init(app: express.Application, router: express.Router) {
     TodoRoutes.init(router);
     UserRoutes.init(router);

     router
       .route("*")
       .get(StaticDispatcher.sendIndex);


     app.use("/", router);
   }
}
