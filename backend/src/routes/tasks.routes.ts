import express, { Request, Response } from "express";
import validateResource from "../middlewere/validateResource";
import { 
  createNewTaskHandler,
  deleteTaskHandler,
  getTasksByProjectHandler,
  // updateTaskProgressHandler,
} from "../controllers/tasks.controller";
import { 
  createTaskSchema,
  findTaskSchema, 
  updateTaskSchema,
} from "../schema/task.schema";

const Router = express.Router();

Router.get('/healthcheck', (req: Request, res: Response): void => {
  res.sendStatus(200);
});

Router.post(
  '/create-new-task/:projectId',
  validateResource(createTaskSchema),
  createNewTaskHandler,
);

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

Router.delete('/delete-task/:projectId', deleteTaskHandler);

export default Router;
