import { Router } from "express";
// import HTTPStatus from "http-status";

import TodoRoutes from "./todo.routes.js";
const routes = new Router();

routes.use("/todo", TodoRoutes);

export default routes;
