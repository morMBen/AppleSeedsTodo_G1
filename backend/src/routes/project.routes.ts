import express, { Request, Response } from "express";
import validateResource from "../middlewere/validateResource";
import {
  createNewProjectHandler,
  deleteProjectHandler,
  getAllProjectsDetailsHandler,
  updateProjectHandler,
} from "../controllers/projects.controller";
import { createProjectSchema, updateProjectSchema } from "../schema/project.shema";

const Router = express.Router();

Router.get('/healthcheck', (req: Request, res: Response): void => {
  res.sendStatus(200);
});

Router.post(
  '/create-new-project',
  validateResource(createProjectSchema),
  createNewProjectHandler,
);

Router.get('/get-all-projects-details', getAllProjectsDetailsHandler);

Router.put('/update-project/:projectId', updateProjectHandler);

Router.delete('/delete-project/:projectId', deleteProjectHandler);

export default Router;
