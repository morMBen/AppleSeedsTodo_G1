import express, { Request, Response } from "express";
import validateResource from "../middlewere/validateResource";
import { 
  getTasksByProjectHandler,
  // updateTaskProgressHandler,
} from "../controllers/tasks.controller";
import { 
  findTaskSchema, 
  updateTaskSchema,
} from "../schema/task.schema";

const Router = express.Router();

Router.get('/healthcheck', (req: Request, res: Response): void => {
  res.sendStatus(200);
});

Router.get(
  '/get-tasks-by-project/:projectId', 
  // validateResource(findTaskSchema),
  getTasksByProjectHandler,
);

// Router.put(
//   '/set-progress/:taskId', 
//   validateResource(updateTaskSchema), 
//   updateTaskProgressHandler,
// );


export default Router;
