import { Request, Response } from 'express';
import { updateProjectUtil } from '../utils/updateObject.util';
import { CreateProjectInput } from '../schema/project.shema';
import {
  createProjectService,
  getAllProjectsDetailsService,
  getProjectByIdService,
  deleteProjectService,
} from '../services/project.service';

export async function createNewProjectHandler(
  req: Request<{}, {}, CreateProjectInput['body']>,
  res: Response,
) {
  try {
    const resObj = await createProjectService(req.body);
    return res.status(200).send(resObj);
  } catch (error: any) {
    console.error(error);
    return res.status(409).send(error.message);
  }
}

export async function getAllProjectsDetailsHandler(req: Request, res: Response) {
  try {
    const resObj = await getAllProjectsDetailsService();

    return res.status(200).send(resObj);
  } catch (error: any) {
    console.error(error);
    return res.status(400).send(error.message);
  }
}

export async function updateProjectHandler(req: Request, res: Response) {
  const { projectId } = req.params;
  if (!projectId) {
    return res.status(400).send("projectId required as params");
  }

  const project = await getProjectByIdService(projectId);
  if (!project) {
    return res.status(404).send("project not found");
  }

  try {
    const updatedProject = updateProjectUtil(project, req.body);
    const resObj = 

    return res.status(200).send(resObj);
  } catch (error: any) {
    console.error(error);
    return res.status(400).send(error.message);
  }
}

export async function deleteProjectHandler(req: Request, res: Response) {
  try {

    const { projectId } = req.params;
    if (!projectId) {
      return res.status(400).send("projectId required as params");
    }

    const resObj = await deleteProjectService(projectId);

    return res.status(200).send(resObj);
  } catch (error: any) {
    console.error(error);
    return res.status(400).send(error.message);
  }
}
