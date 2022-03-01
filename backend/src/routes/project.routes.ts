import express, { Request, Response } from "express";
import validateResource from "../middlewere/validateResource";
import {
  // createNewProjectHandler,  
  getAllProjectsDetailsHandler,
} from "../controllers/projects.controller";
import { createProjectSchema } from "../schema/project.shema";


const Router = express.Router();

Router.get('/healthcheck', (req: Request, res: Response): void => {
  res.sendStatus(200);
});

// Router.post(
//  '/create-new-project', 
//  validateResource(createProjectSchema),
//  createNewProjectHandler,
// );

Router.get('/get-all-projects-meta', getAllProjectsDetailsHandler);

export default Router;
