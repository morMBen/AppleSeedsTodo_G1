import express, { Request, Response } from "express";
import { getAllProjectsNamesHandler } from "../controllers/projects.controller";

const Router = express.Router();

Router.get('/healthcheck', (req: Request, res: Response): void => {
  res.sendStatus(200);
});

Router.get('/projects?field=title', getAllProjectsNamesHandler);




export default Router;
