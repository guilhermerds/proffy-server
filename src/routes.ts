import express from "express";
import ClassesController from "./Controller/ClassesController";
import ConnectionsController from "./Controller/ConnectionsController";

const classesController = new ClassesController();
const connectionsController = new ConnectionsController();

const routes = express.Router();

routes.post("/classes", classesController.create);
routes.get("/classes", classesController.index);

routes.post("/connections", connectionsController.create);
routes.get("/connections", connectionsController.index);

export default routes;
