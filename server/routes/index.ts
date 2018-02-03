import * as express from "express";
import {TodoRoutes} from "@server/api/todo/route/todo-route";
import {UserRoutes} from "@server/api/auth/route/user-route";

import {StaticDispatcher} from "@server/commons/static/index";


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
