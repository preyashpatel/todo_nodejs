import routes from ".";
// import HTTPStatus from "http-status";

import TodoControllers from "../controllers/todo/todo.controllers";

routes.post("/", TodoControllers.createTodo());

export default routes;
