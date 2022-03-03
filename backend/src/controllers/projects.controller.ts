import { Request, Response } from 'express';
import { CreateProjectInput } from '../schema/project.shema';
import { 
  createProjectService,
  getAllProjectsDetailsService
} from '../services/project.service';

export async function createNewProjectHandler(
  req: Request<{}, {}, CreateProjectInput['body']>,
  res: Response,
) {
  try {
    const project = await createProjectService(req.body);
    return res.status(200).send(project);
  } catch (error: any) {
    console.error(error);
    return res.status(409).send(error.message);
  }
}

export async function getAllProjectsDetailsHandler(req: Request, res: Response) {
  const projects = await getAllProjectsDetailsService()

  return res.send(projects);
}
