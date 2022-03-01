import express, { Request, Response } from "express";
import validateResource from "../middlewere/validateResource";
import { 
  
  getAllProjectsDetailsHandler,
} from "../controllers/projects.controller";


const Router = express.Router();

Router.get('/healthcheck', (req: Request, res: Response): void => {
  res.sendStatus(200);
});

Router.get('/get-all-projects-meta/:projectId', getAllProjectsDetailsHandler);



export default Router;
