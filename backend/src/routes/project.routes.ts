import express, { Request, Response } from "express";
import { 
  getAllProjectsDetailsHandler,
  updateTaskProgressHandler,
  
} from "../controllers/projects.controller";

const Router = express.Router();

Router.get('/healthcheck', (req: Request, res: Response): void => {
  res.sendStatus(200);
});

Router.get('/get-projects', getAllProjectsDetailsHandler);

Router.put('/set-progress', updateTaskProgressHandler)


export default Router;
