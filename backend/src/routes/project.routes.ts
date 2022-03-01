import express, { Request, Response } from "express";
import validateResource from "../middlewere/validateResource";
import { 
  getAllProjectsDetailsHandler,
  updateTaskProgressHandler,
  getTasksByProjectHandler,
} from "../controllers/projects.controller";
import { updateTaskSchema } from "../schema/task.schema";


const Router = express.Router();

Router.get('/healthcheck', (req: Request, res: Response): void => {
  res.sendStatus(200);
});

Router.get('/get-all-projects-meta', getAllProjectsDetailsHandler);

Router.get(
  '/get-tasks-by-project', 
  validateResource(getTaskSchema), 
  getTasksByProjectHandler,
);

Router.put(
  '/set-progress:taskId', 
  validateResource(updateTaskSchema), 
  updateTaskProgressHandler,
);


export default Router;
